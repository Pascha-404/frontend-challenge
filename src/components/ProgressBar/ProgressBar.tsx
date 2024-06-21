'use client';

import React from 'react';

interface IProgressBarProps {
	className?: string;
	maxSteps: number;
	step: number;
}

const ProgressBar: React.FC<IProgressBarProps> = ({ maxSteps, step, className }) => {
	// Takes a index value and compares it with the current step
	// Is the index lower or equal to the current step it returns the bg color for current/solved steps
	// Is the index higher then the current step it returns the bg color for unsolved steps
	const getColorClass = (index: number) => {
		return step >= index ? 'bg-stone-900 dark:bg-white' : 'bg-gray-300 dark:bg-gray-700';
	};

	return (
		<div className={className} data-testid='progressbar'>
			<div className='flex items-center gap-x-1'>
				{[...Array(maxSteps)].map((_, idx) => (
					<div
						key={`progressbar-step-${idx}`}
						className={`${getColorClass(idx)} w-full h-2.5 transition duration-500`}
						role='progressbar'
						aria-valuenow={step + 1 * 20}
						aria-valuemin={0}
						aria-valuemax={100}></div>
				))}
				<div className='ms-1'>
					<span
						className={`${
							step + 1 === maxSteps ? 'opacity-100' : 'opacity-0'
						} flex-shrink-0 ms-auto size-5 flex justify-center items-center rounded-full bg-stone-900 dark:bg-white text-white dark:text-black transition duration-500`}>
						<svg
							className='flex-shrink-0 size-3'
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<polyline points='20 6 9 17 4 12'></polyline>
						</svg>
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;
export type { IProgressBarProps };
