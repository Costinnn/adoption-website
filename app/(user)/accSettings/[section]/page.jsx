"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import axios from "axios";

import "@/components/FormStyle.scss";

const sectionData = {
  name: { title: "numele", id: "name", type: "text", label: "Nume nou:" },
  password: {
    title: "parola",
    id: "password",
    type: "password",
    label: "Parola noua:",
    label2: "Confirma parola",
  },
};

const AccountSettings = ({ params }) => {
  const router = useRouter();
  const { data: session, update } = useSession();
  const [fields, setFields] = useState({});
  const [inputData, setInputData] = useState("");
  const [secondPw, setSecondPw] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateFields = {
      fieldToUpdate: params.section,
      inputData,
    };
    if (params.section === "password") {
      if (inputData !== secondPw) {
        setFeedback("Parolele nu corespund!");
        return;
      }
    }
    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_URL}/api/accSettings`,
        updateFields
      );

      if (res.data.id) {
        if (params.section === "name") {
          //update name in session
          await update({
            ...session,
            user: { ...session.user, name: inputData },
          });
          setFeedback("");

          console.log("Name updated with success!");
        }
        router.push("/account");
        router.refresh("/account");
      } else if (res.error) {
        setFeedback(res.error);
      }
      setInputData("");
      setSecondPw("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setFields(sectionData[params.section]);
  }, [params.section]);

  return (
    <main>
      <h1>Schimba {fields.title}</h1>
      <form onSubmit={handleSubmit} className="accform">
        <label htmlFor={fields.id}>{fields.label}</label>
        <input
          type={fields.type}
          id={fields.id}
          name={fields.id}
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          required
        />
        {params.section === "password" && (
          <>
            <br />
            <label htmlFor="secondPw">{fields.label2}</label>
            <input
              type="password"
              id="secondPw"
              name="secondPw"
              value={secondPw}
              onChange={(e) => setSecondPw(e.target.value)}
              required
            />
          </>
        )}
        <button className="button3">Actualizeaza {fields.title}</button>
        {feedback && <p>{feedback}</p>}
      </form>
    </main>
  );
};

export default AccountSettings;
