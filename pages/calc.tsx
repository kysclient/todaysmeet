import {useAuth} from "../lib/context/auth-context";
import {useModal} from "../lib/hooks/useModal";
import {SEO} from "../components/common/seo";
import {Modal} from "../components/modal/modal";
import {ActionModal} from "../components/modal/action-modal";
import {MainHeader} from "../components/home/main-header";
import {Button} from "../components/ui/button";
import {HeroIcon} from "../components/ui/hero-icon";
import {ToolTip} from "../components/ui/tooltip";
import React, {
    ChangeEvent,
    ClipboardEvent,
    ReactElement,
    ReactNode,
    SetStateAction,
    useCallback,
    useEffect, useRef,
    useState
} from "react";
import {HomeLayout, ProtectedLayout} from "../components/layout/common-layout";
import Spreadsheet, {CellBase, Matrix} from "react-spreadsheet";
import {useTheme} from "../lib/context/theme-context";
import {CalcLayout} from "../components/layout/calc-layout";
import {People} from "../lib/types/people";
import {variants} from "../components/input/input";
import {AnimatePresence, motion} from "framer-motion";
import {getImagesData} from "../lib/validation";
import {toast} from "react-hot-toast";
import {FilesWithId, ImageData, ImagesPreview} from "../lib/types/file";
import {ImagePreview} from "../components/input/image-preview";
import cn from "clsx";
import {NextImage} from "../components/ui/next-image";
import noImage from "/public/assets/no-image.svg"
import {User} from "../lib/types/user";
import {addDoc, getDoc, serverTimestamp, WithFieldValue} from "firebase/firestore";
import {Tweet} from "../lib/types/tweet";
import {manageReply, manageTotalPhotos, manageTotalTweets, uploadImages} from "../lib/firebase/utils";
import {sleep} from "../lib/utils";
import {tweetsCollection} from "../lib/firebase/collections";
import Link from "next/link";
import {saveAs} from 'file-saver';
import * as XLSX from 'xlsx';

export default function Calc(): JSX.Element {
    const [showResult, setShowResult] = useState<boolean>(false);
    const {theme} = useTheme();
    const {open, openModal, closeModal} = useModal();
    const isDarkMode = ['dim', 'dark'].includes(theme);
    // {value: "Chocolate"}, {value: "Vanilla"}, {value: "Chocolate"}, {value: "Vanilla"}, {value: "Chocolate"}, {value: "Vanilla"}, {value: "Chocolate"}, {value: "Vanilla"}, {value: "Chocolate"}
    const [data, setData] = useState<Matrix<CellBase<any>>>([]);
    const [degree, setDegree] = useState(1);
    const [rowLabels, setRowLabels] = useState<string[] | []>([]);
    const [columnLabels, setColumnLabels] = useState<string[] | []>([]);

    /// options
    const [people, setPeople] = useState<People[]>([{
        name: "",
    }]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [account, setAccount] = useState<string>("")
    const [degreeAccount, setDegreeAccount] = useState([]);
    // images
    const [selectedImages, setSelectedImages] = useState<FilesWithId>([]);
    const [imagesPreview, setImagesPreview] = useState<ImagesPreview>([]);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const inputFileRef = useRef<HTMLInputElement>(null);
    const onClick = (): void => inputFileRef.current?.click();
    const previewCount = imagesPreview.length;
    const isUploadingImages = !!previewCount;


    //api
    const [loading, setLoading] = useState(false);
    const {user, isAdmin} = useAuth();
    const {name, username, photoURL} = user as User;
    const userId = user?.id as string;

    const {
        open: shareOpen,
        openModal: shareOpenModal,
        closeModal: shareCloseModal
    } = useModal();


    const addPerson = () => {
        setPeople([...people, {name: ""}])
    }

    const deletePerson = (idx: number) => {
        setPeople((prevArray) => {
            const newArray = [...prevArray];
            newArray.splice(idx, 1);
            return newArray;
        });
    }

    const nameOnChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        let copyArray = [...people];
        copyArray[idx] = {...copyArray[idx], name: e.target.value}
        setPeople(copyArray)
    }

    const showResultPage = () => {
        setShowResult(true)

    }

    const back = () => {
        setShowResult(!showResult)
    }

    useEffect(() => {
        setRowLabels(people.map(person => {
            return person.name;
        }))
    }, [people])

    useEffect(() => {
        let data = [];
        let degreeAccountData: any[] = [];
        for (let i = 0; i < degree; i++) {
            data.push(`${i + 1}차`);
            degreeAccountData.push('');
        }
        data.push('합계');
        setDegreeAccount(degreeAccountData);
        setColumnLabels(data);

    }, [degree])

    useEffect(() => {
        if (showResult) {
            let colData = [];
            let total = 0;
            for (let i = 0; i < degree; i++) {
                const acc = degreeAccount[i];
                acc !== "" ? total += Math.round(parseInt(acc) / people.length) : total += 0;
                acc !== "" ?
                    colData.push({value: `${Math.round(parseInt(acc) / people.length)}`})
                    : colData.push({value: ''})
            }
            colData.push({value: `${total}원`, readOnly: true})
            let rowData = [];
            for (let i = 0; i < people.length; i++) {
                rowData.push(colData)
            }
            setData(rowData)
        }
    }, [degree, people.length, showResult])


    const sheetOnChange = useCallback((data: Matrix<CellBase>) => {
        setData(data.map((col, index) => {
            let total = 0;
            let realCopy: any[] = [];
            realCopy = col.map((price, idx) => {
                total += isNaN(parseInt(price?.value)) ? 0 : parseInt(price?.value)
                if (col.length - 1 === idx) {
                    let copy = col;
                    copy[idx] = {value: `${total.toString()}원`, readOnly: true}
                    return copy;
                }
                return price
            })
            return realCopy;
        }))
    }, [setData])


    const share = async (): Promise<void> => {
        setLoading(true);
        closeModal();
        shareCloseModal();
        const userId = user?.id as string;

        let text = ""
        text += `총 정산금액: ${totalPrice}원\n\n`;

        people.forEach((person, idx) => {
            text += `${person.name}: `;
            data[idx].forEach((price: any, index) => {

                text += index === data[idx].length - 1 ? ` 합계: ${price[index] ? price[index].value : 0}원\n\n` : `${index + 1}차 ${price ? price.value : 0}원 `
            })
        })

        text += `\n${degree}차까지 달리시느라 고생하셨습니다\n`
        text += `빠른정산부탁드립니다 좋은하루보내세요❤️\n\n`
        text += `계좌번호: ${account}`

        const tweetData: WithFieldValue<Omit<Tweet, 'id'>> = {
            text: text,
            parent: null,
            images: await uploadImages(userId, selectedImages),
            userLikes: [],
            createdBy: userId,
            createdAt: serverTimestamp(),
            updatedAt: null,
            userReplies: 0,
            userRetweets: []
        };
        await sleep(300);

        const [tweetRef] = await Promise.all([
            addDoc(tweetsCollection, tweetData),
            manageTotalTweets('increment', userId),
            tweetData.images && manageTotalPhotos('increment', userId),
        ]);
        const {id: tweetId} = await getDoc(tweetRef);
        setLoading(false);
        discardValues();
        setShowResult(false);

        toast.success(
            () => (
                <span className='flex gap-2'>
          정상등록 되었습니다.
          <Link href={`/tweet/${tweetId}`} className='custom-underline font-bold'>
            보기
          </Link>
        </span>
            ),
            {duration: 6000}
        );
    }

    const discardValues = () => {
        setPeople([]);
        setAccount('');
        setTotalPrice(0)
        setDegree(1);
    }

    const handleImageUpload = (
        e: ChangeEvent<HTMLInputElement> | ClipboardEvent<HTMLTextAreaElement>
    ): void => {
        const isClipboardEvent = 'clipboardData' in e;

        if (isClipboardEvent) {
            const isPastingText = e.clipboardData.getData('text');
            if (isPastingText) return;
        }

        const files = isClipboardEvent ? e.clipboardData.files : e.target.files;

        const imagesData = getImagesData(files, previewCount);

        if (!imagesData) {
            toast.error('gif 파일 혹은 이미지파일 4장까지만 업로드 가능합니다.');
            return;
        }

        const {imagesPreviewData, selectedImagesData} = imagesData;

        setImagesPreview([...imagesPreview, ...imagesPreviewData]);
        setSelectedImages([...selectedImages, ...selectedImagesData]);

        inputRef.current?.focus();
    };

    const handleAccOnChange = (index: any, value: any): void => {
        const newArray = [...degreeAccount];
        newArray[index] = value;
        setDegreeAccount(newArray);
    };

    const removeImage = (targetId: string) => (): void => {
        setSelectedImages(selectedImages.filter(({id}) => id !== targetId));
        setImagesPreview(imagesPreview.filter(({id}) => id !== targetId));

        const {src} = imagesPreview.find(
            ({id}) => id === targetId
        ) as ImageData;

        URL.revokeObjectURL(src);
    };

    const downloadExcel = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const fileName = `${year}-${month}-${day}-정산.xlsx`;

        const excelData = [
            ["", ...columnLabels],
            ...data.map((rowData, index) => {
                return [rowLabels[index], ...rowData.map((cell: any, idx) => {
                    if (rowData.length - 1 === idx) {
                        console.log('cell :', cell, idx)
                        return cell ? cell.value : '0'
                    }
                    return cell?.value
                })];
            }),
            ["총 정산금액", totalPrice],
            ['계좌번호', account]
        ];
        const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(excelData);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet');

        XLSX.writeFile(wb, fileName);
    }

    const cleanImage = (): void => {
        imagesPreview.forEach(({src}) => URL.revokeObjectURL(src));

        setSelectedImages([]);
        setImagesPreview([]);
    };
    type PostImageBorderRadius = Record<number, string[]>;

    const postImageBorderRadius: Readonly<PostImageBorderRadius> = {
        1: ['rounded-2xl'],
        2: ['rounded-tl-2xl rounded-bl-2xl', 'rounded-tr-2xl rounded-br-2xl'],
        3: ['rounded-tl-2xl rounded-bl-2xl', 'rounded-tr-2xl', 'rounded-br-2xl'],
        4: ['rounded-tl-2xl', 'rounded-tr-2xl', 'rounded-bl-2xl', 'rounded-br-2xl']
    };

    return (
        <>
            <SEO title='정산 - 투밋'/>
            <Modal
                modalClassName='max-w-xs bg-main-background w-full p-8 rounded-2xl'
                open={shareOpen}
                closeModal={shareCloseModal}
            >
                <ActionModal
                    title='공유하시겠습니까 ?'
                    description='홈화면 피드에 공유되며, 계좌번호 사용에 대한 개인정보 제공에 동의 해주세요.'
                    mainBtnClassName='bg-accent-blue hover:bg-accent-blue/90 active:bg-accent-blue/75 accent-tab
                            focus-visible:bg-accent-blue/90'
                    mainBtnLabel='동의 및 공유하기'
                    action={share}
                    closeModal={shareCloseModal}
                />
            </Modal>

            <main className="hover-animation flex min-h-screen w-full max-w-xl flex-col border-x-0
         border-light-border pb-96 dark:border-dark-border">

                <Modal
                    modalClassName='max-w-xs bg-main-background w-full p-8 rounded-2xl'
                    open={open}
                    closeModal={closeModal}
                >
                    <ActionModal
                        title='공유하시겠습니까 ?'
                        description='This can’t be undone and you’ll remove all Tweets you’ve added to your Bookmarks.'
                        mainBtnClassName='bg-accent-blue hover:bg-accent-blue/90 active:bg-accent-blue/75 accent-tab
                            focus-visible:bg-accent-blue/90'
                        mainBtnLabel='공유하기'
                        action={share}
                        closeModal={closeModal}
                    />
                </Modal>
                <MainHeader useActionButton={showResult} action={back} className='flex items-center'>
                    <div className='-mb-1 ml-2 flex flex-col'>
                        <h2 className='-mt-1 text-xl font-bold'>정산</h2>
                        <p className='text-xs text-light-secondary dark:text-dark-secondary'>
                            @{user?.username}
                        </p>
                    </div>

                </MainHeader>
                {loading && (
                    <motion.i className='h-1 w-[100%] animate-pulse bg-main-accent' {...variants} />
                )}
                {

                    !showResult ? <>
                            <section className="p-4 w-full">
                                <div className="mb-6">
                                    <label htmlFor="username-success"
                                           className="block mb-2 text-sm font-medium text-main-accent">총 정산 금액
                                    </label>
                                    <div className="flex">
                                       <span
                                           className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        W
                                      </span>
                                        <input type="number" id="website-admin" value={`${totalPrice}`}
                                               onChange={(e) => {
                                                   setTotalPrice(parseInt(e.target.value))
                                               }}
                                               className="rounded-none   bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="총 정산 금액"/>

                                        <span
                                            className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        KRW
                                      </span>
                                    </div>
                                </div>


                                <div className="flex mb-2 justify-between">
                                    <div>
                                        <label htmlFor="username-success"
                                               className="block text-sm font-medium text-main-accent">모임
                                            인원</label>
                                    </div>

                                    <button type="button" onClick={addPerson}
                                            className="w-15 h-15  bg-main-accent text-[#F7F9F9] hover:bg-main-accent/90 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">인원
                                        추가
                                    </button>
                                </div>
                                <div className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                     id="user_avatar_help">
                                    정산자도 함께 포함하여 작성 해주세요.
                                </div>
                                {
                                    people.map((person, idx) => (
                                        <>
                                            <AnimatePresence mode='popLayout'>
                                                <motion.div
                                                    {...variants}
                                                >
                                                    <StyledInput key={idx} idx={idx} value={person.name}
                                                                 deletePerson={deletePerson}
                                                                 nameOnChange={nameOnChange}/>
                                                </motion.div>
                                            </AnimatePresence>
                                        </>
                                    ))
                                }

                                <div className="mb-6 ">
                                    <label
                                        className="block mb-2 text-sm font-medium text-main-accent">몇차까지
                                        하셨나요?</label>
                                    <select id="countries" value={degree} onChange={(e) => {
                                        setDegree(parseInt(e.target.value))
                                    }}
                                            className="items-center w-full py-2.5 px-4 text-sm font-medium rounded-lg text-center text-gray-900 bg-gray-50 dark:border-gray-700 dark:text-white hover:bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-700">
                                        <option value={1}>1차</option>
                                        <option value={2}>2차</option>
                                        <option value={3}>3차</option>
                                        <option value={4}>4차</option>
                                        <option value={5}>5차</option>
                                        <option value={6}>6차</option>
                                        <option value={7}>7차</option>
                                        <option value={8}>8차</option>
                                        <option value={9}>9차</option>
                                        <option value={10}>10차</option>
                                    </select>

                                </div>

                                <label
                                    className="block mb-2 text-sm font-medium text-main-accent">차수별 총 금액</label>
                                {
                                    degreeAccount.map((acc, idx) => (
                                        <>
                                            <div className="mb-6">

                                                <input type="text" id="total" placeholder={`${idx + 1}차 금액`}
                                                       value={acc}
                                                       onChange={(e) => {
                                                           handleAccOnChange(idx, e.target.value)
                                                       }}
                                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                />
                                            </div>
                                        </>
                                    ))
                                }

                                <div className="mb-6">
                                    <label
                                        className="block mb-2 text-sm font-medium text-main-accent">입금계좌</label>
                                    <input type="text" id="total" placeholder="ex)신한 001-10000-1000" value={account}
                                           onChange={(e) => {
                                               setAccount(e.target.value)
                                           }}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                         id="user_avatar_help">
                                        계좌번호는 정산, 공유하기 기능 외 그 어떤곳에도 이용되지 않습니다.
                                    </div>
                                </div>

                                <button type="button" onClick={showResultPage}
                                        className="w-full text-[#F7F9F9] bg-main-accent hover:bg-main-accent/90  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    정산시작
                                </button>
                            </section>
                        </>
                        : <>
                            <section className='mt-0.5'>
                                <label htmlFor="username-success"
                                       className="block mt-2 mb-4 text-sm font-medium text-main-accent">
                                    정산은 기본적으로 총 금액 / N 방식으로 정산됩니다. 필요시 임의로 금액을 조정해주세요.
                                </label>


                                <Spreadsheet
                                    darkMode={isDarkMode}
                                    columnLabels={columnLabels}
                                    rowLabels={rowLabels}
                                    data={data}
                                    onChange={sheetOnChange}/>

                                <div className='flex flex-col'>
                                    <p className='xl:block mt-2 mb-2'>계좌번호: {account}</p>
                                    <p className='xl:block mb-2'>총 정산금액: {totalPrice}원</p>


                                    <div className='mt-0.5 p-5 flex'>
                                        <motion.div {...variants}>
                                            <div
                                                className='flex text-main-accent'
                                            >
                                                <div
                                                    className={cn(
                                                        `cursor-pointer custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition 
                                                     duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2 
                                                     group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 
                                                     dark:group-focus-visible:ring-white xs:p-3 xl:pr-5 accent-tab accent-bg-tab group relative rounded-full p-2
                                                       hover:bg-main-accent/10 active:bg-main-accent/20`,
                                                    )}
                                                    onClick={shareOpenModal}
                                                >
                                                    <p className='xl:block'>공유하기</p>

                                                    <HeroIcon
                                                        className={cn(
                                                            'h-5 w-5')}
                                                        iconName={'ShareIcon'}
                                                    />
                                                    <ToolTip tip={'공유하기'} modal={false}/>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className='mt-0.5 p-5 flex'>
                                        <motion.div {...variants}>
                                            <div
                                                className='flex text-main-accent'
                                            >
                                                <div
                                                    className={cn(
                                                        `cursor-pointer custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition 
                                                     duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2 
                                                     group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 
                                                     dark:group-focus-visible:ring-white xs:p-3 xl:pr-5 accent-tab accent-bg-tab group relative rounded-full p-2
                                                       hover:bg-main-accent/10 active:bg-main-accent/20`,
                                                    )}
                                                    onClick={downloadExcel}
                                                >
                                                    <p className='xl:block'>엑셀 다운로드</p>

                                                    <HeroIcon
                                                        className={cn(
                                                            'h-5 w-5')}
                                                        iconName={'FolderArrowDownIcon'}
                                                    />
                                                    <ToolTip tip={'엑셀 다운로드'} modal={false}/>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className='mt-0.5 p-5 flex'>
                                        <motion.div {...variants}>
                                            <div
                                                className='flex text-main-accent'
                                            >
                                                <input
                                                    className='hidden'
                                                    type='file'
                                                    accept='image/*'
                                                    onChange={handleImageUpload}
                                                    ref={inputFileRef}
                                                    multiple
                                                />
                                                <div
                                                    className={cn(
                                                        `cursor-pointer custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition 
                                                     duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2 
                                                     group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 
                                                     dark:group-focus-visible:ring-white xs:p-3 xl:pr-5 accent-tab accent-bg-tab group relative rounded-full p-2
                                                       hover:bg-main-accent/10 active:bg-main-accent/20`,
                                                    )}
                                                    onClick={onClick}
                                                >
                                                    <p className='xl:block'>영수증 첨부하기</p>

                                                    <HeroIcon
                                                        className={cn(
                                                            'h-7 w-7')}
                                                        iconName={'PhotoIcon'}
                                                    />
                                                    <ToolTip tip={'이미지'} modal={false}/>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {isUploadingImages ? (
                                        <ImagePreview
                                            imagesPreview={imagesPreview}
                                            previewCount={previewCount}
                                            removeImage={removeImage}
                                        />
                                    )
                                    : null
                                    // <>
                                    //     <div className="p-5 flex">
                                    //         <NextImage
                                    //             className='w-[48px] h-[48px] transition
                                    //                     hover:brightness-75 hover:duration-200'
                                    //             imgClassName="rounded-2xl"
                                    //             previewCount={previewCount}
                                    //             src={noImage}
                                    //             alt={"no_image"}
                                    //             useSkeleton
                                    //         />
                                    //         <p className='xl:block ml-2 mt-3 text-light-secondary dark:text-dark-secondary'>No
                                    //             image available</p>
                                    //     </div>
                                    // </>

                                }

                            </section>
                        </>
                }
            </main>
        </>
    )
}

interface InputProps {
    value: string;
    nameOnChange: (e: React.ChangeEvent<HTMLInputElement>, idx: number) => void;
    idx: number;
    deletePerson: (idx: number) => void;
}

const StyledInput = ({value, nameOnChange, idx, deletePerson}: InputProps) => {
    return (
        <>
            <div className="flex mb-6">
                <div className="relative w-full">
                    <input type="text" value={value} onChange={(e) => {
                        nameOnChange(e, idx)
                    }}
                           className="block rounded-lg p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                           placeholder="이름" required/>

                    <button type="button" onClick={() => {
                        deletePerson(idx)
                    }}
                            className="absolute top-0 right-0 p-2.5  bg-main-accent/90 rounded-r-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

Calc.getLayout = (page: ReactElement): ReactNode => (
    <ProtectedLayout>
        <CalcLayout>
            {page}
        </CalcLayout>
    </ProtectedLayout>
);
