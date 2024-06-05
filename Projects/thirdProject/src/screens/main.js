import React, { useState, useEffect } from 'react'
import currencyData from '../api/currency.js'
import { Text, View } from 'react-native';

export default function main() {
    const [currency, setCurrency] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true; // To handle potential memory leaks

        currencyData({ type: 'USD' }).then(data => {
            if (isMounted) {
                setCurrency(data);
                setLoading(false);
            }
        }).catch(error => {
            if (isMounted) {
                console.error('Error fetching currency data:', error);
                setLoading(false);
            }
        });

        return () => {
            isMounted = false; // Cleanup to prevent setting state on unmounted component
        };
    }, []);
  return (
    <View>
       {loading ? <Text>Loading...</Text> : <Text>{currency?.conversion_rates?.BGN}</Text>}
    </View>
  )
}
