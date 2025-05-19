import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const Login = () => {
    // state name
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    // state email
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    // state password
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        const hasNumber = /\d/.test(value);
        if (hasNumber) {
            setNameError('Name must contain only letters, no numbers.');
        } else {
            setNameError('');
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        // Check Email format
        const isValidEmail = /^[^\s@]+@gmail\.com$/.test(value);
        if (!isValidEmail && value !== '') {
            setEmailError('Email must be a valid Gmail address (e.g., Tuan@gmail.com).');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        // Check Password format
        const startsWithUpperCase = /^[A-Z]/.test(value);
        const hasNumber = /\d/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        if (value === '') {
            setPasswordError('');
        } else if (!startsWithUpperCase || !hasNumber || !hasSpecialChar) {
            setPasswordError('Password must start with an uppercase letter, contain at least one number and one special character.');
        } else {
            setPasswordError('');
        }
    };

    //test 
    const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" });
    const [loginInput, setLoginInput] = useState({ email: "", password: "" });

    const changeInputHandler = (e) => {
        const { name, value } = e.target;
        if (type === "signup") {
            setSignupInput({ ...signupInput, [name]: value });
        }
        else {
            setLoginInput({ ...loginInput, [name]: value });
        }

    }

    return (
        <div className="flex items-center w-full justify-center">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign Up</CardTitle>
                            <CardDescription>
                                Set up a new account and click 'Sign Up' when you're finished.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {/* Name */}
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    type="text"
                                    placeholder="Ex: Tuan"
                                    required
                                    value={name}
                                    onChange={handleNameChange}
                                />
                                {nameError && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
                                        {nameError}
                                    </p>
                                )}
                            </div>
                            {/* Email */}
                            <div className="space-y-1">
                                <Label htmlFor="username">Email</Label>
                                <Input
                                    type="email"
                                    placeholder="Ex: Tuan@gmail.com"
                                    required
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                {emailError && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
                                        {emailError}
                                    </p>
                                )}
                            </div>
                            {/* Password */}
                            <div className="space-y-1">
                                <Label htmlFor="username">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Ex: Abcxyz@123"
                                    required
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                {passwordError && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
                                        {passwordError}
                                    </p>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Sign Up</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Enter your password to log in. After signing up, you'll be automatically logged in.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Email</Label>
                                <Input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Login
