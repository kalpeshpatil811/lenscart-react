
export const getCustomerInfo = () => {  
    return localStorage.getItem('customerInfo') ? JSON.parse(localStorage.getItem('customerInfo')) : null;
 }
 
 export const setCustomerInfo = (customerInfo) => {
 
     const customerData = getCustomerInfo();
 
     const newCustomerData = {...customerData, ...customerInfo};
 
     localStorage.setItem('customerInfo', JSON.stringify(newCustomerData));
 }
 
 export const removeCustomerInfo = () => {
     localStorage.removeItem('customerInfo');
 }