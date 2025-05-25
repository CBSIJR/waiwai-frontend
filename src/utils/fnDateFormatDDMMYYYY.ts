/**
 * Formata uma data para o formato dd/mm/yyyy
 * @param dateString String de data para formatar
 * @returns Data formatada
 */
export default function fnDateFormatDDMMYYYY(dateString: Date): string {
    try {
        const date = new Date(dateString);

        // Verificar se a data é válida
        if (isNaN(date.getTime())) {
            return dateString.toISOString();
        }

        // Formatar para dd/mm/yyyy
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    } catch (e: unknown) {
        const error = e as string;
        return error;
    }
}