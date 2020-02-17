import Joi from '@hapi/joi';

export default Joi.object({
    value: Joi.string().trim().min( 1 ).max( 255 ).label( 'Value' )
              .when( '$isCreateMode', {
                  then: Joi.string()
                           .trim()
                           .min( 1 )
                           .max( 255 )
                           .label( 'Value' )
                           .required()
              } ),
    isDone: Joi.boolean().optional().label( 'Done' ),
    deadline: Joi.date().greater( 'now' ).label( 'Deadline' )
                 .when( '$isCreateMode', {
                     then: Joi.date()
                              .greater( 'now' )
                              .label( 'Deadline' )
                              .required()
                 } ),
    userId: Joi.number().label( 'User Id' )
               .when( '$isCreateMode', {
                   then: Joi.number().label( 'User Id' ).required()
               } ),
}).min(1).max(4);