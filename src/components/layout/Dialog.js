const withBackdrop = (WrappedComponent) => {
	return (props) => <WrappedComponent {...props} />;
};

export const Dialog = ({ isOpen, onClose, children }) => {
	return (
		<>
			{isOpen && (
				<>
					<div className="backdrop" onClick={onClose}></div>
					<div className="dialog">{children}</div>
				</>
			)}
		</>
	);
};

export const DialogWithBackdrop = withBackdrop(Dialog);
