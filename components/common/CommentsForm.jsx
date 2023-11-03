'use client';
import './styles/commentsform.scss';
import { useReducer } from 'react';

const CommentsForm = ({ postType }) => {
	const [data, dispatch] = useReducer(CommentDataReducer, {
		name: '',
		email: '',
		context: '',
	});

	const handleSubmitComment = async () => {};

	return (
		<div className='comments-from-container'>
			<div className='title'>
				<p>ثبت نظر</p>
			</div>
			<div className='info'>
				<input
					type='text'
					value={data.email}
					onChange={e =>
						dispatch({ type: 'email', payload: e.target.value })
					}
					placeholder='آدرس ایمیل'
				/>
				<input
					type='text'
					value={data.name}
					onChange={e =>
						dispatch({ type: 'name', payload: e.target.value })
					}
					placeholder='نام و نام خانوادگی'
				/>
			</div>
			<div className='comment'>
				<textarea
					value={data.context}
					onChange={e =>
						dispatch({ type: 'context', payload: e.target.value })
					}
					placeholder='نظر شما...'
					cols='30'
					rows='10'></textarea>
			</div>
			<div className='action'>
				<button
					onClick={handleSubmitComment}
					disabled={
						data.name.length == 0 ||
						data.email.indexOf('@') == -1 ||
						data.context.length == 0
					}>
					ارسال
				</button>
			</div>
		</div>
	);
};

export default CommentsForm;

function CommentDataReducer(state, action) {
	switch (action.type) {
		case 'name':
			return { ...state, name: action.payload };
		case 'email':
			return { ...state, email: action.payload };
		case 'context':
			return { ...state, context: action.payload };
		case 'clear':
			return { name: '', email: '', context: '' };
		default:
			throw new Error('invalid action type provided.');
	}
}
