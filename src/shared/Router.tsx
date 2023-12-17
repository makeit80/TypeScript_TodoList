import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Layout from "../components/Layout/Layout";
import GlobalStyle from '../GlobalStyle';

const Router = () => {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="Detail/:id" element={<Detail />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default Router;

