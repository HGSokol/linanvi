import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import styles from "./styles/index.module.scss";

interface IForm {
  isSubmit?: Dispatch<SetStateAction<boolean>>;
}

const Form: FC<IForm> = ({ isSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState({
    name: true,
    email: true,
    phone: true,
  });
  const [previewError, setPreviewError] = useState(false);

  useEffect(() => {
    if (previewError && !Object.values(error).includes(true)) {
      setPreviewError(false);
    }
  }, [previewError, error]);

  const handleChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, dataset } = e.target;
    const formattedValue = value.replace(/\s/g, "");

    const matchValue = dataset.pattern
      ? !new RegExp(dataset.pattern).test(formattedValue)
      : value.length == 0 && key !== "message";

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
    setError((prev) => ({
      ...prev,
      [key]: matchValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPreviewError(true);

    try {
      if (!Object.values(error).includes(true)) {
        console.log(form);

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        isSubmit?.(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputBlock}>
        <div className={styles.inputWrapper}>
          <input
            value={form.name}
            onChange={(e) => handleChange("name", e)}
            type="text"
            placeholder="Name*"
            className={`${styles.input} ${
              previewError && error.name && styles.inputError
            }`}
          />
          {previewError && error.name && (
            <span className={styles.error}>*Incorrect data</span>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <input
            value={form.phone}
            onChange={(e) => handleChange("phone", e)}
            data-pattern="^\+?[\d\s]+$"
            placeholder="Phone*"
            inputMode="numeric"
            className={`${styles.input} ${
              previewError && error.phone && styles.inputError
            }`}
          />
          {previewError && error.phone && (
            <span className={styles.error}>*Incorrect data</span>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <input
            value={form.email}
            onChange={(e) => handleChange("email", e)}
            data-pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            placeholder="E-mail*"
            inputMode="email"
            className={`${styles.input} ${
              previewError && error.email && styles.inputError
            }`}
          />
          {previewError && error.email && (
            <span className={styles.error}>*Incorrect data</span>
          )}
        </div>
        <textarea
          value={form.message}
          onChange={(e) => handleChange("message", e)}
          placeholder="Comment"
        />
      </div>
      <button
        type="submit"
        className={`${styles.button} ${
          Object.values(error).includes(true) && styles.buttonError
        }`}
      >
        <span>Submit request</span>
      </button>
    </form>
  );
};

export default Form;
