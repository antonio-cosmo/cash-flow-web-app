export const formatPrice = new Intl.NumberFormat('pt-BR', { 
    style: 'currency', 
    currency: 'BRL',
});

export const formatDate = new Intl.DateTimeFormat('pt-BR');