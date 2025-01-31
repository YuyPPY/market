import  { useState, useEffect } from "react";
import { Config } from "./conention";
const api = Config.API;

export function useProvince() {
  const [itemProvince, setItemProvince] = useState([]);
  useEffect(() => {
    const showProvince = async () => {
      try {
        const response = await fetch(api + 'province');
        const jsonData = await response.json();
        setItemProvince(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    showProvince();
  }, []);
  const data = itemProvince.map(item => ({ label: item.province_name, value: item.province_id }));
  return data;
}

export function useDistrict(id) {
  const [itemDistrict, setItemDistrict] = useState([]);
  useEffect(() => {
    const showDistrict = async () => {
      try {
        const response = await fetch(api + 'district/pv/' + id);
        const jsonData = await response.json();
        setItemDistrict(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    showDistrict();
  }, [id]);
  const data = itemDistrict.map(item => ({ label: item.district_name, value: item.district_id }));
  return data;
};
export function usePage(data) {

  const pages = [{
    label: 25, value: 25
  },
  {
    label: 50, value: 50
  },
  {
    label: 100, value: 100
  },
  {
    label: 150, value: 150
  },
  {
    label: 200, value: 200
  },
  {
    label: '--ທັງໝົດ--', value: data
  },];

  return pages;
}
