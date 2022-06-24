import { Divider, Input } from 'antd';

export function Search() {
  return (
    <div>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input name="search" type="text" onChange={() => {}} />
    </div>
  );
}
