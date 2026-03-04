import { useState } from "react";
import "./modal.css";


import { useFoodDataMutate } from "../../hooks/UserFoodDataMutate";


interface ModalProps{
    closeModal: () => void;
}

interface InputProps {
    label: string;
    value: string | number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    upDateValue(value: any): void;
}

const Input = ({ label, value, upDateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input
                 type={typeof value === "number" ? "number" : "text"}
    value={value}
    onChange={event => upDateValue (typeof value === "number"
         ? Number(event.target.value)
          : event.target.value)}
            />
        </>
    );
};

export function CreateModal({closeModal}: ModalProps) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const { mutate } = useFoodDataMutate();
    

    const submit = async () => {
        const formData = new FormData();

        formData.append("title", title);
        formData.append("price", price.toString());
        if(image) {
            formData.append("image", image);
        }   

        await mutate(formData);
        closeModal();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Adicionar novo item </h2>
                <button
                className="close-button"
                onClick={closeModal}
                >
                    X
                </button>

                <div className="input-container">
                    <Input label="title" value={title} upDateValue={setTitle} />
                    <Input label="price" value={price} upDateValue={setPrice} />
                    <label>image do produto</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        if(event.target.files && event.target.files.length > 0) {
                          const file = event.target.files[0];

                          setImage(file);
                          setPreview(URL.createObjectURL(file));
                            }
                        }}  
                        />
                        {preview && 
                        <img src={preview} 
                        alt="Preview" 
                        className="image-preview"/>}
                        </div>
                

                <button
                    type="button"
                    className="add-button"
                    onClick={submit}
                >
                    Adicionar
                </button>
            </div>
        </div>
    );
}
