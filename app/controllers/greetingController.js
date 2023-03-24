exports.sayHello = (req, res) => {
    res.status(200).send(
        {
            status: "success",
            message: "Halo, perkenalkan namaku Afif",
            data: {}
        }
    );
}