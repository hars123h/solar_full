import axios from "axios";
import BASE_URL from "../api_url";
axios.defaults.baseURL = BASE_URL;

const DateDifference = (date1, date2) => {

    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

    return Difference_In_Days;
}

const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export const getuserearn = async () => {

    var plans_purchased = []
    var earn = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0)

    await axios.post(`/get_user`, { user_id: localStorage.getItem('uid') }).then(async (responce) => {
        plans_purchased = responce.data.plans_purchased;
        plans_purchased = plans_purchased.map((plans, index) => {

            if (plans.product_type !== 0) {

                if (today < new Date(plans.fullTime) && today > new Date(plans.date_till_rewarded)) {

                    earn += plans.plan_daily_earning * plans.quantity;

                    return {
                        ...plans, date_till_rewarded: today.toDateString()
                    }
                }
            }

            if (today > new Date(plans.fullTime)) {
                return { ...plans }
            }

            if (DateDifference(today, new Date(plans.fullTime)) === 0 && today > new Date(plans.date_till_rewarded)) {

                if (plans.product_type !== 0) {

                    earn += plans.plan_daily_earning * plans.quantity;
                }
                else {
                    earn += plans.plan_daily_earning * plans.quantity * plans.plan_cycle;
                }
                return {
                    ...plans,
                    date_till_rewarded: today.toDateString()
                }
            }

            return {
                ...plans,
                date_till_rewarded: today.toDateString()
            }


        })
        await axios.post(`/update_earning`, {
            earn: earn,
            temp: plans_purchased,
            user_id: localStorage.getItem('uid')
        })
            .then(() => console.log('Reward successfully updated'))
            .catch(error => console.log('Some error Occured'));
    }).catch(error => {
        console.log('data not find');
    });


};