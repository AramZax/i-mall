import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const RegisterModal = ({
  registerModal,
  handleCloseRegisterModal,
  handleAoutSideClick,
  registerSubmit,
  handleSubmit,
  register,
  errors,
}) => {
  return (
    <>
      {registerModal && (
        <div
          className="header-register-modal"
          onClick={handleCloseRegisterModal}
        >
          <div
            className="header-register-modal-wrapper"
            onClick={handleAoutSideClick}
          >
            <div className="header-register-title-close-section">
              <h1>sign up</h1>
              <button onClick={handleCloseRegisterModal}>
                <IoCloseSharp style={{ fontSize: 24, color: "white" }} />
              </button>
            </div>
            <div className="header-register-form-section">
              <form onSubmit={handleSubmit(registerSubmit)}>
                <div>
                  <div className="register-input-wrapper">
                    <input
                      type="text"
                      placeholder="firstName"
                      {...register("firstName")}
                      className={errors.firstName ? "error" : ""}
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="lastName"
                    {...register("lastName")}
                    className={errors.lastName ? "error" : ""}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="email"
                    {...register("email")}
                    className={errors.email ? "error" : ""}
                  />
                  <input
                    type="password"
                    placeholder="password"
                    {...register("password")}
                    className={errors.password ? "error" : ""}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="repeat Password"
                    {...register("repeatPassword")}
                    className={errors.repeatPassword ? "error" : ""}
                  />
                  <select
                    id="ageSelect"
                    {...register("age")}
                    className={errors.age ? "error" : ""}
                  >
                    <optgroup label="Under 18">
                      <option value="" disabled selected>
                        Select Age
                      </option>
                      <option value="13to17">13 - 17</option>
                    </optgroup>
                    <optgroup label="18 - 35">
                      <option value="18to25">18 - 25</option>
                      <option value="26to35">26 - 35</option>
                    </optgroup>
                    <optgroup label="36 - 50">
                      <option value="36to45">36 - 45</option>
                      <option value="46to50">46 - 50</option>
                    </optgroup>
                    <optgroup label="Over 50">
                      <option value="51to60">51 - 60</option>
                      <option value="over60">Over 60</option>
                    </optgroup>
                  </select>
                </div>
                <button>Submit</button>
              </form>
              <div className="header-change-signIn">
                <button>i Have Account</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default RegisterModal;
