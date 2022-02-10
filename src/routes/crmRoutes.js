import { addnewContact,getContact,getContactbyId ,updateContact,deleteContact} from './../controllers/crmController'

const routes = (app)=>{
    app.route('/contact').get((req,res,next)=>{
        console.log(`${req.originalUrl}`)
        next();
    },getContact)
    .post(addnewContact);

    app.route('/contact/:contactId')
    .get(getContactbyId)
    .put(updateContact)
    .delete(deleteContact);
}

export default routes;