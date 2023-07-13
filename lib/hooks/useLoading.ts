import Router from "next/router";
import { useEffect, useState } from "react";
import {useAuth} from "../context/auth-context";

export const useLoading = () => {
    const {loading, setLoading} = useAuth()
    const [nowLoading, setNowLoading] = useState<boolean>(false);
    useEffect(() => {
        const start = () => {
            setNowLoading(true);
            setLoading(true);
        };
        const end = () => {
            setNowLoading(false);
            setLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);

    return nowLoading;
};
