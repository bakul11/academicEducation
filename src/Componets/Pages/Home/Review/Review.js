import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useActiveUser from '../../../../Hooks/useActiveUser';


const Review = ({ id }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [user] = useActiveUser();
    const profile = user?.profile;
    const userName = user?.userName;

    const onSubmit = data => {

        const reviewData = {
            discription: data?.discription,
            userPhoto: profile,
            userName: userName,
            postId: id
        }
        fetch('http://localhost:5000/review/reviewPost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    toast.success(result?.message);
                    reset();
                } 
            })
    }




    const handleEmpty = () => {
        toast.error('Please Login first');
    }

    return (
        <div className='review-box'>
            <div className="row">
                <div className="col-lg-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row gy-2">
                            <div className="col-lg-12">
                                <textarea {...register("discription", { required: true })} className='form-control' rows='4' type='text' placeholder='Write Review Message' />
                                {errors.discription && <span className='text-danger'>This field is required</span>}

                            </div>
                            <div className="col-lg-12">
                                {
                                    user?.email ? <button className="btn btn-success">Submit Now <FontAwesomeIcon icon={faHandPointRight} className='ms-2' /></button> : <button className="btn btn-danger" onClick={handleEmpty}>Submit Now <FontAwesomeIcon icon={faHandPointRight} className='ms-2' /></button>
                                }

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;