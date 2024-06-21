import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TenantForm from './TenantForm';
import { IFormData, useFormStore } from '@/store/useFormStore';

const defaultFormState: IFormData = {
	fullName: '',
	email: '',
	phoneNumber: '',
	salary: '',
};

// Create a helper component to wrap TenantForm and set the initial state
const TenantFormWrapper: React.FC<{
	initialFormState: Partial<IFormData>;
	initialPageState: number;
}> = ({ initialFormState, initialPageState }) => {
	const setPage = useFormStore(state => state.setPage);
	const setFormData = useFormStore(state => state.setFormData);

	React.useEffect(() => {
		// Merge the initial form state with the default form state
		const mergedFormState = { ...defaultFormState, ...initialFormState };
		// Reset the store to the initial state
		setPage(initialPageState);
		setFormData(mergedFormState);
	}, [initialFormState, initialPageState, setPage, setFormData]);

	return <TenantForm />;
};

// Helper function to render the component with a specific initial state
const renderComponent = (
	initialFormState: Partial<IFormData> = {},
	initialPageState: number = 0
) => {
	return render(
		<TenantFormWrapper
			initialFormState={initialFormState}
			initialPageState={initialPageState}
		/>
	);
};

describe('TenantForm Component', () => {
	// Test if the component renders correctly with the initial page
	it('renders the form correctly', () => {
		renderComponent();
		expect(screen.getByRole('form')).toBeInTheDocument();
		expect(screen.getByTestId('progressbar')).toBeInTheDocument();
		expect(screen.getByText('Wie lautet Ihr vollständiger Name?')).toBeInTheDocument();
		expect(screen.getByLabelText('Name eingeben')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('z.B. Maxima Mustermann'));
		expect(screen.getByText('Weiter')).toBeDisabled();
		expect(screen.queryByText('Zurück')).not.toBeInTheDocument();
	});

	// Test if the component switches to the next page on 'Weiter' button click
	it('navigates to the next page when "Weiter" button is clicked', () => {
		renderComponent({ fullName: 'Maxima Mustermann' });
		const nextButton = screen.getByText('Weiter');
		fireEvent.click(nextButton);
		expect(screen.getByLabelText('E-Mail eingeben')).toBeInTheDocument();
		expect(screen.getByText('Zurück')).toBeInTheDocument();
		expect(screen.getByText('Weiter')).toBeDisabled();
	});

	// Test if the component switches to the previous page on 'Zurück' button click
	it('navigates to the previous page when "Zurück" button is clicked', () => {
		renderComponent({ fullName: 'Maxima Mustermann' }, 1);
		expect(screen.getByLabelText('E-Mail eingeben')).toBeInTheDocument();
		const prevButton = screen.getByText('Zurück');
		fireEvent.click(prevButton);
		expect(screen.getByText('Wie lautet Ihr vollständiger Name?')).toBeInTheDocument();
	});
});
