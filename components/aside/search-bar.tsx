import {useState, useRef, useEffect} from 'react';
import {useRouter} from 'next/router';
import cn from 'clsx';
import {HeroIcon} from '../ui/hero-icon';
import {Button} from '../ui/button';
import type {ChangeEvent, FormEvent, KeyboardEvent} from 'react';
import {Popover} from '@headlessui/react';
import {AnimatePresence, motion} from 'framer-motion';
import {variants} from "@components/tweet/tweet-actions";
import {db} from "@lib/firebase/app";
import {getDoc, getDocs, limit, query, where} from "firebase/firestore";
import {trendsCollection, usersCollection} from "@lib/firebase/collections";
import {UserCard} from "@components/user/user-card";
import {User} from "@lib/types/user";

export function SearchBar(): JSX.Element {
    const [inputValue, setInputValue] = useState('');
    const specificDivRef = useRef<HTMLDivElement | null>(null);
    const [clickedOutside, setClickedOutside] = useState(false);

    const {push} = useRouter();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = ({
                              target: {value}
                          }: ChangeEvent<HTMLInputElement>): void => setInputValue(value);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (inputValue) void push(`/search?q=${inputValue}`);
    };

    const clearInputValue = (focus?: boolean) => (): void => {
        if (focus) inputRef.current?.focus();
        else inputRef.current?.blur();

        setInputValue('');
    };

    const handleEscape = ({key}: KeyboardEvent<HTMLInputElement>): void => {
        if (key === 'Escape') clearInputValue()();
    };
    const [openPanel, setOpenPanel] = useState(true)
    const [searchData, setSearchData] = useState<User[]>([]);

    useEffect(() => {

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        const clickedElement = event.target as Node;
        if (specificDivRef.current && !specificDivRef.current.contains(clickedElement)) {
            setOpenPanel(true);
        } else {
            setOpenPanel(false);
        }
    };


    useEffect(() => {
        let timer: any;
        clearTimeout(timer);
        timer = setTimeout(async () => {
            const querySnapshot = await getDocs(query(usersCollection, where('username', '>=', inputValue), where('username', '<=', inputValue + '\uf8ff'), limit(20)))
            let data: User[] = []
            querySnapshot.docs.forEach(snapShot => {
                data.push(snapShot.data())
            })
            setSearchData(data)
        }, 1000);

        return () => {
            clearTimeout(timer);
        };

    }, [inputValue])

    return (
        <>
            <div
                className='hover-animation sticky relative top-0 z-10 -my-2 bg-main-background py-2 outline-none'
                ref={specificDivRef}
            >
                <label
                    className={`group flex items-center justify-between gap-4 rounded-full
                   bg-main-search-background px-4 py-2 transition  ${!openPanel && "focus-within:bg-main-background focus-within:ring-2 focus-within:ring-main-accent"}`}
                >
                    <i>
                        <HeroIcon
                            className={`h-5 w-5 text-light-secondary transition-colors
                       group-focus-within:text-main-accent dark:text-dark-secondary ${openPanel && "text-main-accent"}`}
                            iconName='MagnifyingGlassIcon'
                        />
                    </i>
                    <input
                        className='peer flex-1 bg-transparent outline-none
                     placeholder:text-light-secondary dark:placeholder:text-dark-secondary'
                        type='text'
                        placeholder='투밋 검색'
                        ref={inputRef}
                        value={inputValue}
                        onChange={handleChange}
                        onKeyUp={handleEscape}
                    />
                    <Button
                        className={cn(
                            'accent-tab scale-50 bg-main-accent p-1 opacity-0 transition hover:brightness-90 disabled:opacity-0',
                            inputValue &&
                            'focus:scale-100 focus:opacity-100 peer-focus:scale-100 peer-focus:opacity-100'
                        )}
                        onClick={clearInputValue(true)}
                        disabled={!inputValue}
                    >
                        <HeroIcon className='h-3 w-3 stroke-white' iconName='XMarkIcon'/>
                    </Button>
                </label>
            </div>

            {
                !openPanel &&
                <AnimatePresence>
                    <motion.div {...variants}
                                className="w-full  top-10 left-2 menu-container p-4 whitespace-nowrap text-light-primary dark:text-dark-primary"
                    >
                        {
                            inputValue === "" ?
                                <p className="text-dark-secondary text-center pb-10 text-sm">인물, 장소 또는 키워드로 검색해 보세요.</p>
                                : <>
                                    <p className="text-left pb-10 text-sm">"{inputValue}" 검색</p>
                                    {
                                        searchData.map((data, idx) => (
                                            <UserCard {...data} key={data.id}/>
                                        ))
                                    }
                                </>
                        }
                    </motion.div>
                </AnimatePresence>
            }
        </>
    );
}
