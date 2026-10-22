import React, { useContext } from "react";
import { MyStore } from "../context/AppContext";
import { useForm } from "react-hook-form";
// import nanoid from 'nanoid'
import { nanoid } from "nanoid";

const Form = () => {
  const { setUserData, setToggle, userData, updatedUser, setUpdatedUser } =
    useContext(MyStore);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updatedUser
      ? updatedUser
      : {
          image: "",
          name: "",
          email: "",
          password: "",
          phone: "",
        },
  });
  const handleForm = (data) => {
    if (updatedUser) {
      setUserData((prev) => {
        let updatedArr = prev.map((user) => {
          user.id === updatedUser.id
            ? { ...data, id: updatedUser.id }
            : user;
        });
        return updatedArr;
      });
      setUpdatedUser(null);
    } else {
      const arr = [...userData, { ...data, id: nanoid() }];
      setUserData(arr);
      localStorage.setItem("usersData", JSON.stringify(arr));
    }

    setToggle((prev) => !prev);
    reset();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 p-5">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-zinc-800 text-center mb-6">
          {updatedUser ? "Update User" : "Create User"}
        </h1>

        <form onSubmit={handleSubmit(handleForm)} className="space-y-5">
          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Image URL
            </label>
            <input
              {...register("image", {
                required: "Image Url is Required",
                pattern: {
                  value: /^\S(?:.*\S)?$/,
                  message: "No Spaces Allowed",
                },
              })}
              type="url"
              placeholder="Enter image URL"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg outline-none focus:border-blue-500"
            />
            {errors.image && (
              <p className="text-red-700 font-semibold text-base">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Name
            </label>
            <input
              {...register("name", {
                required: "Name is Required",
                pattern: {
                  value: /^\S(?:.*\S)?$/,
                  message: "No Spaces Allowed",
                },
              })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg outline-none focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-700 font-semibold text-base">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email Url is Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg outline-none focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-700 font-semibold text-base">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password Url is Required",
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg outline-none focus:border-blue-500"
            />
            {errors.password && (
              <p className="text-red-700 font-semibold text-base">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Phone Number
            </label>
            <input
              {...register("phone", {
                required: "Phone Url is Required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Invalid Phone Number",
                },
                minLength: {
                  value: 10,
                  message: "Minimum 10 Digits are Required",
                },
                maxLength: {
                  value: 10,
                  message: "Maximum 10 Digits are Required",
                },
              })}
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg outline-none focus:border-blue-500"
            />
            {errors.phone && (
              <p className="text-red-700 font-semibold text-base">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            {updatedUser ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
