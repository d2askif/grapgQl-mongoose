import mongoose from "mongoose";
export class repositoryBase<
  I,
  D extends mongoose.Document,
  M extends mongoose.Model<D>
> {
  protected _model: M;

  constructor(name: string, schema: mongoose.Schema) {
    this._model = mongoose.model<D, M>(name, schema);
  }

  create(input: I): Promise<D> {
    return this._model.create(input);
  }

  async findById(id: string): Promise<D | null> {
    const x = await this._model.findById(id);
    return x;
  }

  async all(): Promise<D[]> {
    const x = await this._model.find({});
    return x;
  }
}
