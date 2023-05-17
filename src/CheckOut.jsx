import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    let data = useLoaderData()


    let { name, email, number, date, _id } = data
    return (
        <div>
            <Link to="/">Home</Link>

            <div>
                <h1>{name}</h1>
                <h1>{email}</h1>
                <h1>{number}</h1>
                <h1>{date}</h1>
                <h1>{_id}</h1>
            </div>

        </div>
    );
};

export default CheckOut;