import {Button} from "@components/ui/button";
import {useRouter} from "next/router";
import {Loading} from "@components/ui/loading";

export function MessageStart({loading}) {
    const router = useRouter()
    return (
        <div className="w-full  flex items-center justify-center p-2 pl-4 mt-48">
            {
                loading ?
                    <Loading/>
                    :
                    <div>
                        <h1 className="mb-2 text-3xl font-medium text-gray-900 dark:text-white">메세지함에 오신것을 환영합니다!</h1>
                        <span className="text-sm text-light-secondary dark:text-dark-secondary">
                            투밋에서 귀하와 다른 사람들 간의 비공개 대화를 통해 일상 또는 피드를 공유하는 등의 작업을 할 수 있습니다.
                        </span>

                        <Button
                            className='mt-6  accent-tab  bg-main-accent text-lg font-bold text-white
                       outline-none transition hover:brightness-90 active:brightness-75  xs:hover:bg-main-accent/90 xs:active:bg-main-accent/75 w-11/12'
                            onClick={() => {
                                router.push("/people")
                            }}
                        >
                            <p>시작하기</p>
                        </Button>
                    </div>
            }
        </div>
    )
}
