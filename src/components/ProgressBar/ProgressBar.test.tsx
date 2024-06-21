import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar, { IProgressBarProps } from './ProgressBar';

// Helper function to render the component with common props
const renderComponent = (props: Partial<IProgressBarProps> = {}) => {
	// Define default props for the component
	const defaultProps: IProgressBarProps = {
		className: '',
		maxSteps: 5,
		step: 0,
	};

	return render(<ProgressBar {...{ ...defaultProps, ...props }} />);
};

describe('ProgressBar Component', () => {
	// Test if the component renders with default props
	it('renders correctly with default props', () => {
		renderComponent();
		expect(screen.getByTestId('progressbar')).toBeInTheDocument();
	});
});
