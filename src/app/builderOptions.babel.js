import builderText from 'i18n!translations/builder/nls/template';

export const featureServiceDefaults = {
  basic: {
    fieldSettings: {
      PrimaryPhoto: {
        required: true,
        type: 'photo',
        fieldID: 'PrimaryPhoto',
        label: builderText.contribute.defaultForm.photo.label,
        placeholder: builderText.contribute.defaultForm.photo.placeholder,
        attributeName: builderText.contribute.defaultForm.photo.attribute,
        validations: [],
        isAttachment: true,
        extras: {
          dataType: 'photo',
          minimumSize: 200,
          photoSettings: [{
            name: 'PrimaryPhoto',
            smallestSide: 1000
          },{
            name: 'PrimaryThumbnail',
            height: 200,
            width: 200
          }]
        }
      },
      Name: {
        required: true,
        type: 'text',
        fieldID: 'Name',
        label: builderText.contribute.defaultForm.name.label,
        attributeName: builderText.contribute.defaultForm.name.attribute,
        placeholder: builderText.contribute.defaultForm.name.placeholder,
        validations: ['arcgisSupportedHtml']
      },
      DateOfPainting: {
        required: true,
        type: 'text',
        fieldID: 'dateOfPainting',
        label: builderText.contribute.defaultForm.dateOfPainting.label,
        attributeName: builderText.contribute.defaultForm.dateOfPainting.attribute,
        placeholder: builderText.contribute.defaultForm.dateOfPainting.placeholder,
        validations: ['arcgisSupportedHtml']
      },
      Gender: {
        required: true,
        type: 'text',
        fieldID: 'Gender',
        label: builderText.contribute.defaultForm.gender.label,
        attributeName: builderText.contribute.defaultForm.gender.attribute,
        placeholder: builderText.contribute.defaultForm.gender.placeholder,
        validations: ['arcgisSupportedHtml']
      },
      BuildingName:{
        required: true,
        type: 'text',
        fieldID: 'BuildingName',
        label: builderText.contribute.defaultForm.buildingName.label,
        attributeName: builderText.contribute.defaultForm.buildingName.attribute,
        placeholder: builderText.contribute.defaultForm.buildingName.placeholder,
        validations: ['arcgisSupportedHtml']
      },
      LocationName: {
        required: true,
        type: 'location',
        fieldID: 'LocationName',
        label: builderText.contribute.defaultForm.location.label,
        attributeName: builderText.contribute.defaultForm.location.attribute,
        placeholder: builderText.contribute.defaultForm.location.placeholder,
        validations: [],
        extras: {
          dataType: 'location',
          storeGeometry: true
        }
      },
      ArtistName: {
        required: true,
        type: 'text',
        fieldID: 'ArtistName',
        label: builderText.contribute.defaultForm.artistName.label,
        attributeName: builderText.contribute.defaultForm.artistName.attribute,
        placeholder: builderText.contribute.defaultForm.artistName.placeholder,
        validations: ['arcgisSupportedHtml']
      },
      Essay: {
        required: true,
        type: 'textarea',
        fieldID: 'Essay',
        label: builderText.contribute.defaultForm.essay.label,
        attributeName: builderText.contribute.defaultForm.essay.attribute,
        placeholder: builderText.contribute.defaultForm.essay.placeholder,
        validations: ['arcgisSupportedHtml']
      }
    }
  }
};

export default {
  featureServiceDefaults
};
