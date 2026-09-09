import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User as UserIcon } from "lucide-react";
import { useSelector } from "react-redux";

import Myprofileside from "./userProfileSidebar/Myprofileside";
import { Field, Input } from "../../components/ui/Field";
import { Skeleton } from "../../components/ui/Skeleton";

const UserDetail = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [usernumber, setUsernumber] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${import.meta.env.VITE_BACK_URL}/user/current`,
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log("Current user:", data);

        setUsername(data.message.name || "");
        setUseremail(data.message.email || "");
        setUsernumber(data.message.phone || "");
        setGender(data.message.gender || "");
      } catch (error) {
        console.error("Fetch user error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user.isLoggedIn) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [user.isLoggedIn]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">
        Account
      </h1>

      <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
        <Myprofileside />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-white/10 bg-ink-900/60 p-6 sm:p-8"
        >
          <h2 className="text-xl font-bold text-white mb-8">
            Personal Details
          </h2>

          {loading ? (
            <div className="space-y-6 max-w-lg">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
              <Field label="Name" >
                <Input
                  type="text"
                  value={username}
                  placeholder="Your name"
                  disabled
                />
              </Field>

              <Field label="Mobile Number" >
                <Input
                  type="tel"
                  value={usernumber}
                  placeholder="Phone number"
                />
              </Field>

              <Field
                label="Email"
            
                className="sm:col-span-2"
              >
                <Input
                  type="email"
                  value={useremail}
                  placeholder="Email address"
                />
              </Field>

              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-300 mb-2 block">
                  Gender
                </label>

                <div className="flex items-center gap-6">
                  <label className="inline-flex items-center gap-2 text-sm text-ink-200 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === "male"}
                      onChange={() => setGender("male")}
                      className="accent-gold-400 w-4 h-4"
                    />
                    Male
                  </label>

                  <label className="inline-flex items-center gap-2 text-sm text-ink-200 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === "female"}
                      onChange={() => setGender("female")}
                      className="accent-gold-400 w-4 h-4"
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default UserDetail;