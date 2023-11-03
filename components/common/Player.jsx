'use client';
import WaveSurfer from 'wavesurfer.js';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { FiPause, FiPlay } from 'react-icons/fi';
import { MdReplay10, MdForward10 } from 'react-icons/md';
import { GoHourglass } from 'react-icons/go';

const Player = ({ audioUrl }) => {
	const waveRef = useRef(null);
	const [play, setPlay] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	let updateCurrentTime = null;

	useLayoutEffect(() => {
		setIsLoading(true);
		setPlay(false);

		waveRef.current = WaveSurfer.create({
			container: '#track',
			barGap: 3,
			barRadius: 3,
			barWidth: 3,
			fillParent: true,
			hideScrollbar: true,
			waveColor: '#77c4ff',
			progressColor: '#2f446a',
			dragToSeek: true,
			cursorWidth: 3,
			height: 60,
			url: audioUrl,
		});

		waveRef.current?.on('finish', () => {
			setPlay(false);
		});

		waveRef.current?.on('play', () => {
			updateCurrentTime = setInterval(() => {
				setCurrentTime(waveRef.current?.getCurrentTime());
			}, 1000);
		});

		waveRef.current?.on('pause', () => {
			clearInterval(updateCurrentTime);
		});

		waveRef.current?.on('ready', () => {
			setIsLoading(false);
		});

		return () => waveRef.current.destroy();
	}, [audioUrl]);

	useEffect(() => {
		if (play) {
			waveRef.current?.play();
		} else waveRef.current?.pause();
	}, [play]);

	return (
		<div className='w-full h-full'>
			{isLoading && (
				<div className='w-full h-full flex items-center justify-center text-3xl text-z-dark-blue'>
					<GoHourglass className='text-4xl animate-bounce' />
				</div>
			)}
			<div
				className='w-full h-1/2 p-2 m-0'
				id='track'></div>
			{!isLoading && (
				<div className='w-full h-1/2 grid grid-cols-5 gap-2 mt-2 text-z-dark-blue text-xl'>
					<div className='col-span-1 flex items-start justify-center py-2'>
						<p>
							{(
								~~(waveRef.current?.getDuration() / 60) + ''
							).padStart(2, '0')}
							:
							{(
								parseInt(waveRef.current?.getDuration() % 60) +
								''
							).padStart(2, '0')}
						</p>
					</div>
					<div className='col-span-1 flex items-center justify-center'>
						<button onClick={() => waveRef.current?.skip(10)}>
							<MdForward10 className='text-3xl' />
						</button>
					</div>
					<div className='col-span-1 flex items-center justify-center'>
						<button onClick={e => setPlay(play => !play)}>
							{play ? (
								<FiPause className='text-3xl' />
							) : (
								<FiPlay className='text-3xl' />
							)}
						</button>
					</div>
					<div className='col-span-1 flex items-center justify-center'>
						<button onClick={() => waveRef.current?.skip(-10)}>
							<MdReplay10 className='text-3xl' />
						</button>
					</div>
					<div className='col-span-1 flex items-start justify-center'>
						<p>
							{(~~(currentTime / 60) + '').padStart(2, '0')}:
							{(parseInt(currentTime % 60) + '').padStart(2, '0')}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Player;
