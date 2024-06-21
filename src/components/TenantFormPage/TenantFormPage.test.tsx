import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TenantFormPage, { ITenantFormPage } from './TenantFormPage';

// Helper function to render the component with common props
const renderComponent = (props: Partial<ITenantFormPage> = {}) => {
	// Define default props for the non-fieldset case
	const nonFieldsetProps: ITenantFormPage = {
		className: '',
		header: 'Test Header',
		inputId: 'test-input',
		inputValue: '',
		inputType: 'text',
		onChange: jest.fn(),
		labelText: 'Test Label',
		fieldset: false,
	};

	// Define default props for the fieldset case
	const fieldsetProps: ITenantFormPage = {
		className: '',
		header: 'Test Header',
		inputId: 'test-input',
		inputValue: '',
		inputType: 'text',
		onChange: jest.fn(),
		labelText: 'Test Label',
		fieldset: true,
		fieldsetLegend: 'Test Legend',
		fieldsetData: ['Option 1', 'Option 2'],
	};

	const defaultProps = props.fieldset
		? { ...fieldsetProps, ...props }
		: { ...nonFieldsetProps, ...props };

	return render(<TenantFormPage {...(defaultProps as ITenantFormPage)} />);
};

describe('TenantFormPage Component', () => {
	// Test if the component renders with required props
	it('renders the component with required props', () => {
		renderComponent();
		expect(screen.getByText('Test Header')).toBeInTheDocument();
		expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
	});

	// Test if the component correctly renders the subheader when provided
	it('renders subheader when provided', () => {
		renderComponent({ subheader: 'Test Subheader' });
		expect(screen.getByText('Test Subheader')).toBeInTheDocument();
	});

	// Test if the component correctly handles fieldset mode
	it('renders fieldset mode with correct data', () => {
		renderComponent({ fieldset: true });
		expect(screen.getByText('Test Legend')).toBeInTheDocument();
		['Option 1', 'Option 2'].map(option =>
			expect(screen.getByText(option)).toBeInTheDocument()
		);
	});

	// Test if onChange is called when input value changes
	it('calls onChange when input value changes', () => {
		const onChangeMock = jest.fn();
		renderComponent({ onChange: onChangeMock });
		const input = screen.getByLabelText('Test Label');
		fireEvent.change(input, { target: { value: 'Test Value' } });
		expect(onChangeMock).toHaveBeenCalledTimes(1);
	});

	// Test if the textTransform function is applied correctly
	it('applies textTransform function correctly', () => {
		const fieldsetData = ['option-1', 'option-2'];
		const textTransform = (text: string) => text.toUpperCase();
		renderComponent({
			fieldset: true,
			fieldsetData: fieldsetData,
			textTransform: textTransform,
		});
		fieldsetData.forEach(item =>
			expect(screen.getByText(item.toUpperCase())).toBeInTheDocument()
		);
	});
});
