import { Description, Dialog, DialogPanel, DialogBackdrop, DialogTitle } from '@headlessui/react';
import { useState } from "react";
import GoogleButton from 'react-google-button';
import { useNavigate, Outlet } from "react-router-dom";
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase.js';

export const ProtectedRoute = ({user}) => {
    const [isOpen, setIsOpen] = useState(true)
    const navigate = useNavigate()

    const googleSignIn = async() => {
        try {
            const response = await signInWithPopup(auth, googleProvider)
            user = response.user
        } catch (error) {
            console.log(error)
            return;
        }
    } 

    if (!user) {
        return <Dialog open={isOpen} onClose={() => {setIsOpen(false);
                        navigate("/");
                    }} className="relative z-50">
                        <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-md" />
                        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                            
                        <DialogPanel transition className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0">
                            <DialogTitle className="mt-2 text-sm/6 text-white/50">Requires Sign-in</DialogTitle>
                            <br></br>
                            <Description className="mt-2 text-sm/6 text-white/50">To access this page you need to sign in with a Google Account.</Description>
                            <GoogleButton onClick={googleSignIn}/>
                            <div className="flex gap-4">
                            <button className="hover:cursor-pointer mt-2 text-sm/6 text-white/50" onClick={() => {setIsOpen(false);
                                navigate("/");
                            }
                            }>
                                <br></br>
                                Return to Home</button>
                            </div>
                        </DialogPanel>
                        </div>
                    </Dialog>
    }

    return <Outlet />;
};