'use client';
import './styles/podcastenteries.scss';
import { HiOutlinePlay } from 'react-icons/hi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { BsShare, BsPlay } from 'react-icons/bs';
import Slider from '@ant-design/react-slick';
import { useMobileScreen } from '../../../hooks';
import Player from '@/components/common/Player';
import Image from 'next/image';
import { useState } from 'react';

const PodcastEnteries = ({ podcasts }) => {
	const mobile = useMobileScreen();
	const [selectedPodcast, setSelectedPodcast] = useState(
		podcasts && podcasts?.find(item => item.id == 1)
	);

	const PodcastEntery = ({ data, selected = false }) => {
		return (
			<div className='space'>
				<div
					className={selected ? 'entery selected' : 'entery'}
					onClick={e => setSelectedPodcast(data)}>
					<div className='caption'>
						<h4>{data?.title}</h4>
						<p>{data?.author}</p>
					</div>
					<div className='img'>
						<Image
							src={data?.image}
							alt=''
							fill
							className='object-cover'
						/>
						<HiOutlinePlay className='play-icon' />
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='podcast-container'>
			<div className='items-container'>
				<div className='title'>
					<p>پادکست ها</p>
				</div>
				<div className='sections'>
					<div className='list'>
						<Slider
							verticalSwiping={!mobile}
							vertical={!mobile}
							slidesToScroll={1}
							slidesPerRow={mobile ? 1 : 4}
							centerMode
							adaptiveHeight
							arrows={false}
							dots={false}>
							{podcasts?.map(item => (
								<PodcastEntery
									key={item.id}
									data={item}
									selected={item.id == selectedPodcast.id}
								/>
							))}
						</Slider>
					</div>
					<div className='play-canvas'>
						<div className='info'>
							<div className='caption'>
								<h4>{selectedPodcast?.title}</h4>
								<div className='inline-info'>
									<RiAccountCircleLine />
									<p>{selectedPodcast?.author}</p>
								</div>
								<div className='summary'>
									{selectedPodcast?.caption}
								</div>
								<div className='controls'>
									<button className='btn red'>
										<AiFillHeart />
									</button>
									<button className='btn'>
										<BsShare />
									</button>
									<div className='btn play'>
										33,267
										<BsPlay />
									</div>
								</div>
							</div>
							<div className='img'>
								<Image
									src={selectedPodcast?.image}
									alt=''
									fill
									className='object-cover'
								/>
							</div>
						</div>
						<div className='control'>
							<Player audioUrl={selectedPodcast?.audio} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PodcastEnteries;
