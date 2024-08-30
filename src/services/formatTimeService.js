const formatDateTime = (isoDate) => {
    const now = new Date();
    const date = new Date(isoDate);
    const diffInMs = now - date;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);

    if (diffInMonths >= 1) {
        return `${diffInMonths} m${diffInMonths > 1 ? '' : ''} `;
    }

    if (diffInWeeks >= 1) {
        return `${diffInWeeks} w${diffInWeeks > 1 ? 's' : ''}`;
    }

    if (diffInDays >= 1) {
        return `${diffInDays} day${diffInDays > 1 ? 's' : ''}`;
    }

    // Extract hours and minutes
    let hours = date.getHours();
    const minutes = date.getMinutes();

    // Determine AM/PM
    const period = hours >= 12 ? 'pm' : 'am';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight

    // Format minutes with leading zero if necessary
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Construct time string
    return `${hours}:${formattedMinutes} ${period}`;
};

export default formatDateTime;
