import React, { useContext, useState } from "react";
import { Modal, FloatingLabel } from "flowbite-react";
import styled from "styled-components";
import { UserContext } from "../../UserContext";
import ActivityImg from "../../CropImage/ActivityImg";
import validateForm from "../../../../utils/validateForm";
const typeOptions = [
  { value: "", label: "Select activity" },
  { value: "Run", label: "Run" },
  { value: "Walk", label: "Walk" },
  { value: "Bike", label: "Bike" },
  { value: "Swim", label: "Swim" },
  { value: "Hike", label: "Hike" },
];

const AddActivity = () => {
  const { createActivity } = useContext(UserContext);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [note, setNote] = useState("");
  const [image, setImage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleButtonClick = () => {
    const formErrors = validateForm(type, name, date, start, end, note);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setOpenModal(false);
      createActivity(type, name, date, start, end, note, image);
      setType("");
      setName("");
      setDate("");
      setStart("");
      setEnd("");
      setNote("");
    } else {
      console.error("Validation errors:", formErrors);
    }
  };

  return (
    <div className="-mt-6">
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <img src="/assets/images/icon/Add-icon.svg" alt="Add-icon" />
      </button>
      <Modal
        dismissible
        show={openModal}
        size="md"
        onClose={() => {
          setOpenModal(false);
          setErrors({});
        }}
        popup
      >
        <Modal.Header />
        <Modal.Body className="overflow-hidden">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
              Add Activity
            </h3>
            <InputWrapper>
              <StyledSelect
                name="type"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {typeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </StyledSelect>
              <StyledLabel>Type:</StyledLabel>
            </InputWrapper>
            {errors.type && (
              <ErrorMessage style={{ color: "red" }}>
                {errors.type}
              </ErrorMessage>
            )}

            <InputWrapper>
              <FloatingLabel
                className="text-[1.25rem] text-black border-black "
                variant="outlined"
                label="Name:"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputWrapper>
            {errors.name && (
              <ErrorMessage style={{ color: "red" }}>
                {errors.name}
              </ErrorMessage>
            )}

            <InputWrapper>
              <DateLabel>Date:</DateLabel>
              <DateInput
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </InputWrapper>
            {errors.date && (
              <ErrorMessage style={{ color: "red" }}>
                {errors.date}
              </ErrorMessage>
            )}
            <div className="flex gap-[1.6rem] justify-between">
              <div>
                <InputWrapper>
                  <TimeLabel>Start:</TimeLabel>
                  <TimeInput
                    className="text-base w-[10.15625rem] rounded-[10px] border-black pt-4 pb-2.5"
                    type="time"
                    name=""
                    id=""
                    onChange={(e) => setStart(e.target.value)}
                  />
                </InputWrapper>
                {errors.start && (
                  <ErrorMessage style={{ color: "red" }}>
                    {errors.start}
                  </ErrorMessage>
                )}
              </div>
              <div>
                <InputWrapper>
                  <TimeLabel>End:</TimeLabel>
                  <TimeInput
                    className="text-base w-[10.15625rem] rounded-[10px] border-black pt-4 pb-2.5"
                    type="time"
                    name=""
                    id=""
                    onChange={(e) => setEnd(e.target.value)}
                  />
                </InputWrapper>
                {errors.end && (
                  <ErrorMessage style={{ color: "red" }}>
                    {errors.end}
                  </ErrorMessage>
                )}
                {!errors.end && errors.time && (
                  <ErrorMessage style={{ color: "red" }}>
                    {errors.time}
                  </ErrorMessage>
                )}
              </div>
            </div>

            <InputWrapper>
              <FloatingLabel
                className="text-[1.25rem] text-black border-black "
                variant="outlined"
                label="Note:"
                onChange={(e) => setNote(e.target.value)}
              />
            </InputWrapper>
            {errors.note && (
              <ErrorMessage style={{ color: "red" }}>
                {errors.note}
              </ErrorMessage>
            )}
            <ActivityImg setImage={setImage} />
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-between border ">
          <button
            className="border-[1px] rounded-[10px] px-6 p-4 "
            color="gray"
            onClick={() => {
              setOpenModal(false);
              setErrors({});
            }}
          >
            Cancel
          </button>
          <button
            className="border-[1px] rounded-[10px] bg-[#ECF229] text-black border-[black] px-6 p-4"
            onClick={() => {
              handleButtonClick();
            }}
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const StyledLabel = styled.label`
  position: absolute;
  top: 0.825rem;
  left: 1rem;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 1rem 1rem 0.635rem;
  font-size: inherit;
  text-align: center;
  border-color: black;
  border-radius: 10px;

  &::after {
    content: "Type:";
    position: absolute;
  }
`;

const TimeLabel = styled.label`
  font-size: 1.25rem;
  position: absolute;
  left: 1rem;
  top: 0.825rem;
`;
const TimeInput = styled.input`
  text-align: end;
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    background: none;
    width: 100%;
  }
`;

const DateLabel = styled.label`
  font-size: 1.25rem;
  position: absolute;
  left: 1rem;
  top: 0.825rem;
`;

const DateInput = styled.input`
  width: 100%;
  font-size: 1.25rem;
  text-align: end;
  border-color: black;
  border-radius: 10px;
  padding: 1rem 1rem 0.635rem;

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    width: 100%;
    background: none;
    -webkit-appearance: none;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  font-size: 1.25rem;
  max-height: 3.5rem;
`;

export const ErrorMessage = styled.p`
  font-size: 0.8rem;
`;

export default AddActivity;
