import {Button} from "@components/ui/button";
import {CustomIcon} from "@components/ui/custom-icon";
import {useRouter} from "next/router";


export function MessageSelect(): JSX.Element {
    const router = useRouter()
    return (
        <>
                <div className="flex items-center justify-center  mt-48">
                    <div>
                        <h1 className="mb-2 text-3xl font-medium text-gray-900 dark:text-white">메세지를 선택하세요</h1>
                        <span className="text-sm text-light-secondary dark:text-dark-secondary">
                            기존 대화에서 선택하거나 새 대화를 시작하거나 계속 찾아보세요.
                        </span>

                        <Button
                            className='mt-6  accent-tab absolute right-4 -translate-y-[72px] bg-main-accent text-lg font-bold text-white
                       outline-none transition hover:brightness-90 active:brightness-75 xs:static xs:translate-y-0
                       xs:hover:bg-main-accent/90 xs:active:bg-main-accent/75 w-11/12'
                            onClick={() => {
                                router.push("/people")
                            }}
                        >
                            <p>새 메세지</p>
                        </Button>
                    </div>
                </div>
        </>
    )
}
