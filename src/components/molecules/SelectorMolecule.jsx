/* eslint-disable react/prop-types */
export default function SelectorMolecule({value, setValue, lista}) {
    
  return (
    <select onChange={e => setValue(e.target.value)} value={value}>
        {lista.map((item)=>
        <option key={item.value} value={item.value}>{item.label}</option>
        )}
    </select>
  )
}
