import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type addTodo = {
  title: string;
  description: string;
};

const AddCard = () => {
  const { register, handleSubmit } = useForm<addTodo>();
  const navigation = useNavigate();

  const submitHandler = (data: any) => {
    fetch("http://localhost:8080/todo/add",{
      method: "POST",
      body: JSON.stringify(data)
    }).then(
      (val) => {
        console.log(val.json());
        navigation("/dashboard");
      }      
    )
  };

  return (
    <form
      className="bg-white shadow-lg rounded-md overflow-hidden p-4 w-4/5 m-8"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Add Card</h2>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-600"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title")}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-600"
        >
          Description (max 30 words)
        </label>
        <textarea
          id="description"
          {...register("description")}
          rows={3}
          className="mt-1 p-2 w-full border rounded-md"
          required
        ></textarea>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Add Card
      </button>
    </form>
  );
};

export default AddCard;