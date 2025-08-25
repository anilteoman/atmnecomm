import axiosInstance from "../utils/axiosInstance";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";
import { loginUser } from "../store/thunks/loginThunks";
import { toast } from "react-toastify";

export default function LogIn() {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({mode: "onTouched"});

    const onSubmit = async (data) => {
        const result = await dispatch(loginUser(data));

        if(result.success) {
            history.goBack();
        } else {
            toast.error("Login failed: Wrong email / password!")
        }
    }
    
    return (
        <section className="login-main py-10">
            <div className="login-title  py-5">
                <h2 className="text-[#252B42] text-[2.5rem] font-bold leading-[3.125rem] text-center">Log In</h2>
            </div>
            <div className="login-form flex flex-col items-center">
                <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="login-email flex flex-col">
                        <label htmlFor="email" className="text-lg leading-6">Email</label>
                        <input {...register("email", {required: "Please enter your email!", pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address!"
                        }})} id="email" type="email" placeholder="test@example.com" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem] md:w-[25rem]"/>
                    </div>
                    <div className="login-password flex flex-col">
                        <label htmlFor="password" className="text-lg leading-6">Password</label>
                        <input {...register("password", {required: "Please enter your password!"})} id="password" type="password" placeholder="Password" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem] md:w-[25rem]"/>
                    </div>
                    <div className="login-rememberme flex gap-6">
                        <label htmlFor="rememberme" className="text-lg leading-6">Remember Me</label>
                        <input {...register("rememberMe")} id="rememberme" type="checkbox" className=" bg-gray-50 border rounded-[5px] w-4"/>
                    </div>
                    <div className="login-button flex justify-center pt-2">
                        <button disabled={!isValid} className="bg-[#23A6F0] disabled:bg-blue-300 disabled:hover:cursor-not-allowed text-white p-1.5 rounded w-[7rem] h-[3rem] hover:cursor-pointer flex items-center justify-center gap-2">Log In</button>
                    </div>
                </form>
            </div>
        </section>
    );
}