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

	// Test if component renders the correct number of steps
	it('displays the correct number of steps', () => {
		const maxSteps = 3;
		renderComponent({ maxSteps: maxSteps });
		const steps = screen.getAllByRole('progressbar');
		expect(steps).toHaveLength(maxSteps);
	});

	// Test if correct steps are highlighted
	it('highlights the correct steps', () => {
		const step = 2;
		renderComponent({ step });
		const steps = screen.getAllByRole('progressbar');
		steps.forEach((stepElement, index) => {
			if (step >= index) {
				expect(stepElement).toHaveClass('bg-stone-900');
			} else {
				expect(stepElement).toHaveClass('bg-gray-300');
			}
		});
	});
});
