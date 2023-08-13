export const reformateDate = (dateString: string) => {
    const dateParts = dateString.split('.');

    return new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
};
