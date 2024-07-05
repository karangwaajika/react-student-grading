import { useEffect, useState } from "react";
import axios from "axios";
import FlashMessage from "./ui/FlashMessage";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";

export default function FormsSection() {
  return (
    <main className="forms-container">
      <SignUp />
      <SignIn />
    </main>
  );
}
