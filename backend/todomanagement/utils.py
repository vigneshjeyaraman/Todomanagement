def serializer_validation(validation_serializer=None, data=None):
    serializer = validation_serializer(data=data)
    serializer.is_valid(raise_exception=True)
    return serializer.save() 