import React, { useState } from 'react';
import {
    Button, Card, CheckBox, DisclaimerText, DisclaimerTitle, DisclaimerWrapper,
    Input, InputGroup, InputRow, Label, PageHeader, ProgressBar, ProgressBarWrap,
    RadioButtons, RadioGroup, RadioLabel, Result, ResultNote, ResultTile, ResultTitle,
    ResultWrapper, Subtitle, Title, Wrapper
} from './styledCalculator';

interface CalcResults {
    uop: number;
    uoz: number;
    uod: number;
    b2b: number;
}

export const Calculator = () => {
    const [salary, setSalary] = useState('');
    const [mode, setMode] = useState<'gross' | 'net'>('gross');
    const [results, setResults] = useState<CalcResults | null>(null);

    const calculate = (e: React.FormEvent) => {
        e.preventDefault();
        const raw = parseFloat(salary);
        if (!raw || raw <= 0) return;

        let gross = raw;
        if (mode === 'net') gross = raw / 0.72;

        // UoP (Employment contract — umowa o pracę)
        const pension    = gross * 0.0976;
        const disability = gross * 0.015;
        const sickness   = gross * 0.0245;
        const social     = pension + disability + sickness;
        const healthBase = gross - social;
        const health     = healthBase * 0.09;
        const taxBase    = Math.max(0, gross - social - 250);
        const tax        = Math.max(0, taxBase * 0.12 - 300);
        const uop        = Math.round(gross - social - health - tax);

        // UoZ (Contract of mandate — umowa zlecenie)
        const uozSocial  = gross * 0.1371;
        const uozHealth  = (gross - uozSocial) * 0.09;
        const uozTaxBase = Math.max(0, gross - uozSocial - 250);
        const uozTax     = Math.max(0, uozTaxBase * 0.12 - 300);
        const uoz        = Math.round(gross - uozSocial - uozHealth - uozTax);

        // UoD (Contract for work — umowa o dzieło, 50% cost deduction)
        const uodCosts   = gross * 0.5;
        const uodTax     = Math.round((gross - uodCosts) * 0.12);
        const uod        = Math.round(gross - uodTax);

        // B2B (ryczałt ZUS + 19% liniowy)
        const zus        = 1600;
        const b2bBase    = gross - zus;
        const b2bTax     = Math.round(Math.max(0, b2bBase) * 0.19);
        const b2b        = Math.round(gross - zus - b2bTax);

        setResults({ uop, uoz, uod, b2b });
    };

    const fmt = (n: number) => n > 0
        ? `${n.toLocaleString('pl-PL')} PLN`
        : '—';

    const maxVal = results ? Math.max(results.uop, results.uoz, results.uod, results.b2b) : 1;
    const pct    = (n: number) => results ? Math.round((n / maxVal) * 100) : 0;

    const contracts = results ? [
        { key: 'uop', label: 'Employment contract', short: 'UoP',  note: 'Pension + sickness + health deductions', val: results.uop, highlight: true },
        { key: 'uoz', label: 'Contract of mandate', short: 'UoZ',  note: 'Social + health insurance included',      val: results.uoz },
        { key: 'uod', label: 'Contract for work',   short: 'UoD',  note: '50% tax-deductible costs applied',       val: results.uod },
        { key: 'b2b', label: 'B2B contract',        short: 'B2B',  note: 'ZUS ryczałt + 19% flat tax (no VAT)',    val: results.b2b },
    ] : [];

    return (
        <Wrapper>
            <PageHeader>
                <Title>Salary Calculator</Title>
                <Subtitle>Calculate your net take-home pay across all Polish contract types (2024 rates)</Subtitle>
            </PageHeader>

            <Card>
                <form onSubmit={calculate}>
                    <InputRow>
                        <InputGroup>
                            <Label>Monthly salary (PLN)</Label>
                            <Input
                                type="number"
                                min={0}
                                placeholder="e.g. 8 000"
                                value={salary}
                                onChange={e => setSalary(e.target.value)}
                                required
                            />
                        </InputGroup>

                        <RadioGroup>
                            <RadioLabel>I am entering</RadioLabel>
                            <RadioButtons>
                                <CheckBox type="button" selected={mode === 'gross'} onClick={() => setMode('gross')}>Gross</CheckBox>
                                <CheckBox type="button" selected={mode === 'net'}   onClick={() => setMode('net')}>Net</CheckBox>
                            </RadioButtons>
                        </RadioGroup>
                    </InputRow>

                    <Button type="submit">Calculate →</Button>
                </form>
            </Card>

            {results && (
                <ResultWrapper>
                    {contracts.map(c => (
                        <ResultTile key={c.key} highlight={c.highlight}>
                            <ResultTitle>{c.label} ({c.short})</ResultTitle>
                            <Result hasValue={c.val > 0}>{fmt(c.val)}</Result>
                            <ResultNote>{c.note}</ResultNote>
                            <ProgressBarWrap>
                                <ProgressBar width={pct(c.val)} />
                            </ProgressBarWrap>
                        </ResultTile>
                    ))}
                </ResultWrapper>
            )}

            <DisclaimerWrapper style={{ marginTop: results ? 16 : 0 }}>
                <DisclaimerTitle>Disclaimer</DisclaimerTitle>
                <DisclaimerText>
                    Results are based on 2024 Polish tax rates and standard deductions. This calculator is for informational purposes only — individual results may vary depending on personal tax situation, relief eligibility, and employer contributions. Consult a certified accountant for precise figures.
                </DisclaimerText>
            </DisclaimerWrapper>
        </Wrapper>
    );
};
