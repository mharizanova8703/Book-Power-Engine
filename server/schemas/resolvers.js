const { User} = require('../models');

const resolvers = {
  Query: {
      me:async (parent, args) =>{
          
      }
    // profiles: async () => {
    //   return Profile.find();
    // },

    // profile: async (parent, { profileId }) => {
    //   return Profile.findOne({ _id: profileId });
//     // },
  },

  Mutation: {
    // // addProfile: async (parent, { name }) => {
    // //   return Profile.create({ name });
    // // },
    // // addSkill: async (parent, { profileId, skill }) => {
    // //   return Profile.findOneAndUpdate(
    // //     { _id: profileId },
    // //     {
    // //       $addToSet: { skills: skill },
    // //     },
    // //     {
    // //       new: true,
    // //       runValidators: true,
    // //     }
    //   );
    // },
    
  },
};

module.exports = resolvers;
