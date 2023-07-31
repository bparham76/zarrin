import './styles/commentsform.scss';

const CommentsForm = () => {
	return (
		<div className='comments-from-container'>
			<div className='title'>
				<p>ثبت نظر</p>
			</div>
			<div className='info'>
				<input
					type='text'
					name=''
					id=''
					placeholder='آدرس ایمیل'
				/>
				<input
					type='text'
					name=''
					id=''
					placeholder='نام و نام خانوادگی'
				/>
			</div>
			<div className='comment'>
				<textarea
					name=''
					id=''
					placeholder='نظر شما...'
					cols='30'
					rows='10'></textarea>
			</div>
			<div className='action'>
				<button>ارسال</button>
			</div>
		</div>
	);
};

export default CommentsForm;
