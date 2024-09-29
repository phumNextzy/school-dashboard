import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


interface SidebarProps {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}

function NewDataSidebar({ isSidebarVisible, toggleSidebar }: SidebarProps) {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validate = (values: {
    title: string;
    description: string;
    department: string;
  }) => {
    const errors: any = {};
    if (!values.title) {
      errors.title = "Title is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    if (!values.department) {
      errors.department = "Department is required";
    }
    return errors;
  };

  return (
    <>
      <div
        className={`fixed top-16 lg:top-0 xl:top-0 rounded-t-lg lg:rounded-none xl:rounded-none right-0 w-full h-full lg:w-[340px] xl:w-[340px] bg-white text-black shadow-lg transform transition-transform duration-300 z-50 ${
          isSidebarVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Formik
          initialValues={{
            title: "",
            description: "",
            department: "",
            dataSubject: "",
          }}
          validate={validate}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitted(false);
            console.log("Form Submitted:", values);
            setSubmitting(false);
            resetForm();
            toggleSidebar();
          }}
        >
          {({ isSubmitting, resetForm }) => (
            <Form>
              <div className="flex justify-between items-center px-6 h-16 border-b">
                <h2 className="font-semibold mb-4 text-base my-auto">
                  New Data
                </h2>
                <div className="flex flex-row gap-8">
                  <h4
                    onClick={() => {
                      resetForm();
                      toggleSidebar();
                    }}
                    className="my-auto text-sm cursor-pointer"
                  >
                    Cancel
                  </h4>
                  <button
                    type="submit"
                    className="text-white border py-2 px-3 bg-[#009540] border-[#FFFFFF] rounded-lg flex gap-2 w-[57px] h-[40px] text-sm"
                    disabled={isSubmitting}
                    onClick={() => setSubmitted(true)}
                  >
                    <p>Save</p>
                  </button>
                </div>
              </div>

              <div className="px-6">
                <div className="my-4">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Title
                  </label>
                  <Field
                    type="text"
                    name="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#009540] focus:border-[#009540] block w-full p-2.5"
                  />
                  {submitted && (
                    <ErrorMessage
                      name="title"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  )}
                </div>

                <div className="my-4">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Description
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#009540] focus:border-[#009540] block w-full p-2.5 h-[76px]"
                  />
                  {submitted && (
                    <ErrorMessage
                      name="description"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  )}
                </div>

                <div className="my-4">
                  <label
                    htmlFor="department"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select a Department
                  </label>
                  <Field
                    as="select"
                    name="department"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#009540] focus:border-[#009540] block w-full p-2.5"
                  >
                    <option value="">Choose a Department</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </Field>
                  {submitted && (
                    <ErrorMessage
                      name="department"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  )}
                </div>

                <div className="my-6">
                  <label
                    htmlFor="data_subject"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select a Data Subject (Optional)
                  </label>
                  <Field
                    as="select"
                    name="dataSubject"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#009540] focus:border-[#009540] block w-full p-2.5"
                  >
                    <option value="">Choose a Data Subject</option>
                    <option value="Subject1">Subject 1</option>
                    <option value="Subject2">Subject 2</option>
                    <option value="Subject3">Subject 3</option>
                    <option value="Subject4">Subject 4</option>
                  </Field>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {isSidebarVisible && (
        <div
          onClick={() => {
            toggleSidebar();
          }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}
    </>
  );
}

export default NewDataSidebar;
