import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
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
		fieldsetLegend: 'Test legend',
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
});
