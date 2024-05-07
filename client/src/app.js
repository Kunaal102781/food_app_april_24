import React from "react";
import { Routes, Route } from "react-router-dom";
import { login, main } from "./containers";
const Main = main;
const Login = login;
const app = () => {
    return (
        <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
            <Routes>
                <Route path="/*" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default app