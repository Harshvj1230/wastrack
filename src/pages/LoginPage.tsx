import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeProvider } from "@/components/theme-provider";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";

export const LoginPage = ({ newUser }: { newUser: boolean }) => {
  const [loginEmailOrUsername, setLoginEmailOrUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userClass, setUserClass] = useState("");
  const [profilePicture, setProfilePicture] = useState(
    "https://cdn.vite-starter.vercel.app/default-profile.png"
  );
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpRePassword, setSignUpRePassword] = useState("");
  const [signUpStatus, setSignUpStatus] = useState("");

  // Utility function to handle setting status messages
  const setStatusMessage = (message: string, setter: (s: string) => void) => {
    setter(message);
  };

  // Login validation function
  const validateLogin = () => {
    if (loginEmailOrUsername === "") {
      setStatusMessage("email or username is empty", setLoginStatus);
      return;
    }
  };

  const passwordRegex = new RegExp("^.{8,}$");
  // Registration validation function
  const validateRegister = () => {
    if (signUpEmail === "") {
      setStatusMessage("email is invalid", setSignUpStatus);
      return;
    }

    if (firstName === "") {
      setStatusMessage("first name empty", setSignUpStatus);
      return;
    }

    if (lastName === "") {
      setStatusMessage("last name empty", setSignUpStatus);
      return;
    }

    if (userClass === "") {
      setStatusMessage("class is invalid", setSignUpStatus);
      return;
    }

    if (!passwordRegex.test(signUpPassword)) {
      setStatusMessage("password is invalid", setSignUpStatus);
      return;
    }

    if (signUpPassword !== signUpRePassword) {
      setStatusMessage("passwords dont match", setSignUpStatus);
      return;
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen h-screen p-0 sm:p-20 m-0 flex items-center justify-center bg-black inter">
        <Tabs
          defaultValue={newUser ? "Register" : "Login"}
          className="w-[400px]"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Login">Login</TabsTrigger>
            <TabsTrigger value="Register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="Login">
            <Card>
              <CardHeader>
                <CardTitle className="mb-2">Login</CardTitle>
                <CardDescription>
                  Login to your existing account.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="loginIdentifier">Email or Username</Label>
                  <Input
                    className="mt-1 mb-1"
                    id="loginIdentifier"
                    placeholder="johnwick or johnwick@yourhome.com"
                    value={loginEmailOrUsername}
                    onChange={(e) => {
                      setLoginEmailOrUsername(e.target.value);
                    }}
                  />
                  {loginStatus == "user does not exist" && (
                    <p className="text-xs mb-2 text-red-500">
                      No account found with this email or username!{" "}
                      <Link
                        className="text-xs text-cyan-500 underline cursor-pointer"
                        to={"signup"}
                      >
                        Register
                      </Link>
                      .
                    </p>
                  )}
                  {loginStatus == "email or username is empty" && (
                    <p className="text-xs mb-2 text-red-500">
                      Please enter your email or username!
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    className="mt-1 mb-1"
                    id="password"
                    type="password"
                    placeholder="********"
                    value={loginPassword}
                    onChange={(e) => {
                      setLoginPassword(e.target.value);
                    }}
                  />
                </div>
                {loginStatus == "password is invalid" && (
                  <p className="text-xs mb-2 text-red-500">
                    Maybe you've{" "}
                    <Link
                      className="text-xs text-cyan-500 underline cursor-pointer"
                      to="/forgotPassword"
                    >
                      forgot your password
                    </Link>
                    .
                  </p>
                )}
              </CardContent>
              <CardFooter>
                {loginStatus === "some error occurred" && (
                  <p className="text-xs mb-2 text-red-500">
                    Some error occurred! Please try again later.
                  </p>
                )}
                <Button
                  className="w-full"
                  onClick={() => {
                    validateLogin();
                  }}
                >
                  Login
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="Register">
            <Card>
              <CardHeader>
                <CardTitle className="mb-2">Register</CardTitle>
                <CardDescription>
                  Lets complete your first steps before jumping into Studium!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="emailNew">Email</Label>
                  <Input
                    className="mt-1 mb-1"
                    id="emailNew"
                    placeholder="johnwick@yourhome.com"
                    value={signUpEmail}
                    onChange={(e) => {
                      setSignUpEmail(e.target.value);
                    }}
                  />
                  {signUpStatus == "email is invalid" && (
                    <p className="text-xs mb-2 text-red-500">
                      Please enter a valid email id!
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="usernameNew">Username</Label>
                  <Input
                    className="mt-1 mb-1"
                    id="usernameNew"
                    placeholder="johnwick"
                    value={signUpUsername}
                    onChange={(e) => {
                      setSignUpUsername(e.target.value);
                    }}
                  />
                  {signUpStatus == "username is invalid" && (
                    <p className="text-xs mb-2 text-red-500">
                      Please enter a valid email id!
                    </p>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <div className="flex-1 mb-4 sm:mb-0">
                    <Label htmlFor="firstNameNew">First Name</Label>
                    <Input
                      className="mt-1 mb-1"
                      id="firstNameNew"
                      placeholder="John"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                    {signUpStatus === "first name empty" && (
                      <p className="text-xs mb-2 text-red-500">
                        Please enter your first name!
                      </p>
                    )}
                  </div>

                  <div className="flex-1">
                    <Label htmlFor="lastNameNew">Last Name</Label>
                    <Input
                      className="mt-1 mb-1"
                      id="lastNameNew"
                      placeholder="Wick"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                    {signUpStatus === "last name empty" && (
                      <p className="text-xs mb-2 text-red-500">
                        Please enter your last name!
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="emailNew">Class</Label>
                  <div className="[&_*]:!text-xs [&_*]:!text-neutral-200">
                    <Select onValueChange={(value) => setUserClass(value)}>
                      <SelectTrigger className="my-2">
                        <SelectValue placeholder="Class" className={"my-2"} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Class 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {signUpStatus == "class is invalid" && (
                    <p className="text-xs mb-2 text-red-500">
                      Please select a class
                    </p>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <div className="flex-1 mb-4 sm:mb-0">
                    <Label htmlFor="passwordNew">New password</Label>
                    <Input
                      className="mt-1 mb-1"
                      id="passwordNew"
                      type="password"
                      placeholder="********"
                      value={signUpPassword}
                      onChange={(e) => {
                        setSignUpPassword(e.target.value);
                      }}
                    />
                    {signUpStatus === "password is invalid" && (
                      <p className="text-xs mb-2 text-red-500">
                        Hint: passwords can be anything longer than or equal to
                        8 characters!
                      </p>
                    )}
                  </div>

                  <div className="flex-1">
                    <Label htmlFor="rePasswordNew">Re-enter password</Label>
                    <Input
                      className="mt-1 mb-1"
                      id="rePasswordNew"
                      type="password"
                      placeholder="********"
                      value={signUpRePassword}
                      onChange={(e) => {
                        setSignUpRePassword(e.target.value);
                      }}
                    />
                    {signUpStatus === "passwords dont match" && (
                      <p className="text-xs mb-2 text-red-500">
                        Oops! The given passwords don't match!
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                {signUpStatus === "some error occurred" && (
                  <p className="text-xs mb-2 text-red-500">
                    Some error occurred! Please try again later.
                  </p>
                )}

                {signUpStatus == "email or username already exists" && (
                  <p className="text-xs mb-2 text-red-500">
                    Someone has already taken your email! you can{" "}
                    <Link
                      className="text-xs text-cyan-500 underline cursor-pointer"
                      to="login"
                    >
                      login
                    </Link>
                    .
                  </p>
                )}
                <Button
                  className="w-full"
                  onClick={() => {
                    validateRegister();
                  }}
                >
                  Register
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ThemeProvider>
  );
};
