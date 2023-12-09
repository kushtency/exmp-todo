const Card = (props: any) => {
  const { title, description, currentDate, modifiedDate } = props.data;

  return (
    <div className="max-w-md mx-4 my-8 w-96 bg-white shadow-lg rounded-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex justify-between text-sm text-gray-500">
          <p>{currentDate}</p>
          <p>{modifiedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
