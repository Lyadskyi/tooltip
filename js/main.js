const tooltip = document.querySelector('.tooltip');
const tooltipAnchor = document.querySelector('.tooltip__anchor');

const showTooltip = () => {
	tooltip.classList.remove('hidden');
};
const hideTooltip = () => {
	tooltip.classList.add('hidden');
};

tooltipAnchor.addEventListener('mouseenter', showTooltip);
tooltipAnchor.addEventListener('focus', showTooltip);

tooltipAnchor.addEventListener('mouseleave', hideTooltip);
tooltipAnchor.addEventListener('blur', hideTooltip);
